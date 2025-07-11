import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  BarChart3,
  Bell,
  DollarSign,
  Download,
  Eye,
  Filter,
  PieChart,
  Plus,
  Search,
  Settings,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";

const Box = (): JSX.Element => {
  const [selectedCampaign, setSelectedCampaign] = useState("Summer Sale 2024");

  const navigationItems = [
    { name: "Dashboard", active: true },
    { name: "Campaigns", active: false },
    { name: "Analytics", active: false },
    { name: "Settings", active: false },
  ];

  const campaigns = [
    {
      name: "Summer Sale 2024",
      status: "Active",
      budget: "$15,000",
      spent: "$8,450",
      progress: 56,
      impressions: "245K",
      clicks: "12.3K",
      conversions: "1,234",
    },
    {
      name: "Black Friday",
      status: "Scheduled",
      budget: "$25,000",
      spent: "$0",
      progress: 0,
      impressions: "0",
      clicks: "0",
      conversions: "0",
    },
    {
      name: "Holiday Campaign",
      status: "Draft",
      budget: "$10,000",
      spent: "$0",
      progress: 0,
      impressions: "0",
      clicks: "0",
      conversions: "0",
    },
    {
      name: "Spring Collection",
      status: "Completed",
      budget: "$12,000",
      spent: "$11,890",
      progress: 99,
      impressions: "189K",
      clicks: "9.8K",
      conversions: "987",
    },
  ];

  const metricsData = [
    {
      label: "Total Impressions",
      value: "245,678",
      change: "+12.5%",
      trend: "up",
    },
    {
      label: "Click-through Rate",
      value: "4.8%",
      change: "+0.3%",
      trend: "up",
    },
    { label: "Conversion Rate", value: "2.1%", change: "-0.1%", trend: "down" },
    { label: "Cost per Click", value: "$0.68", change: "-$0.05", trend: "up" },
  ];

  const tableData = [
    {
      keyword: "summer dress",
      impressions: "45,678",
      clicks: "2,234",
      ctr: "4.9%",
      cpc: "$0.72",
      conversions: "156",
    },
    {
      keyword: "beach wear",
      impressions: "32,145",
      clicks: "1,876",
      ctr: "5.8%",
      cpc: "$0.65",
      conversions: "134",
    },
    {
      keyword: "swimwear",
      impressions: "28,934",
      clicks: "1,654",
      ctr: "5.7%",
      cpc: "$0.58",
      conversions: "98",
    },
    {
      keyword: "sandals",
      impressions: "21,567",
      clicks: "1,234",
      ctr: "5.7%",
      cpc: "$0.61",
      conversions: "87",
    },
    {
      keyword: "sunglasses",
      impressions: "19,876",
      clicks: "1,098",
      ctr: "5.5%",
      cpc: "$0.69",
      conversions: "76",
    },
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Active":
        return "default";
      case "Scheduled":
        return "secondary";
      case "Draft":
        return "outline";
      case "Completed":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary"></div>
              <span className="text-xl font-semibold">SameSpot</span>
            </div>
            <nav className="flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant={item.active ? "default" : "ghost"}
                  className="h-auto px-3 py-2"
                >
                  {item.name}
                </Button>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search..." className="w-64 pl-10" />
            </div>
            <Button variant="ghost" size="icon" className="h-auto">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-auto">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-80 border-r bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Campaigns</h2>
            <Button size="sm" className="h-auto">
              <Plus className="mr-2 h-4 w-4" />
              New
            </Button>
          </div>

          <div className="space-y-3">
            {campaigns.map((campaign) => (
              <Card
                key={campaign.name}
                className={`cursor-pointer transition-colors hover:bg-accent ${
                  selectedCampaign === campaign.name
                    ? "border-primary bg-accent"
                    : ""
                }`}
                onClick={() => setSelectedCampaign(campaign.name)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">{campaign.name}</h3>
                    <Badge
                      variant={getStatusBadgeVariant(campaign.status)}
                      className="text-xs"
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Budget: {campaign.budget}</span>
                      <span>Spent: {campaign.spent}</span>
                    </div>
                    <Progress value={campaign.progress} className="h-2" />
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <div className="text-muted-foreground">Impressions</div>
                        <div className="font-medium">
                          {campaign.impressions}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Clicks</div>
                        <div className="font-medium">{campaign.clicks}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Conv.</div>
                        <div className="font-medium">
                          {campaign.conversions}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{selectedCampaign}</h1>
              <p className="text-muted-foreground">
                Campaign performance overview
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Select defaultValue="7days">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="h-auto">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="h-auto">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="mb-6 grid grid-cols-4 gap-4">
            {metricsData.map((metric) => (
              <Card key={metric.label}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <div className="flex items-center mt-1">
                        <TrendingUp
                          className={`h-4 w-4 mr-1 ${
                            metric.trend === "up"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            metric.trend === "up"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {metric.change}
                        </span>
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {metric.label.includes("Impressions") && (
                        <Eye className="h-6 w-6 text-primary" />
                      )}
                      {metric.label.includes("Rate") && (
                        <Activity className="h-6 w-6 text-primary" />
                      )}
                      {metric.label.includes("Cost") && (
                        <DollarSign className="h-6 w-6 text-primary" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts and Tables */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Performance Overview</CardTitle>
                    <Tabs defaultValue="impressions" className="w-auto">
                      <TabsList>
                        <TabsTrigger value="impressions">
                          Impressions
                        </TabsTrigger>
                        <TabsTrigger value="clicks">Clicks</TabsTrigger>
                        <TabsTrigger value="conversions">
                          Conversions
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted/20 rounded">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">
                        Chart visualization would appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Top Keywords</CardTitle>
                  <CardDescription>
                    Performance by keyword for the selected period
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Keyword</TableHead>
                        <TableHead>Impressions</TableHead>
                        <TableHead>Clicks</TableHead>
                        <TableHead>CTR</TableHead>
                        <TableHead>CPC</TableHead>
                        <TableHead>Conversions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tableData.map((row) => (
                        <TableRow key={row.keyword}>
                          <TableCell className="font-medium">
                            {row.keyword}
                          </TableCell>
                          <TableCell>{row.impressions}</TableCell>
                          <TableCell>{row.clicks}</TableCell>
                          <TableCell>{row.ctr}</TableCell>
                          <TableCell>{row.cpc}</TableCell>
                          <TableCell>{row.conversions}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Age 25-34</span>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <Progress value={42} className="h-2" />

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Age 35-44</span>
                      <span className="text-sm font-medium">28%</span>
                    </div>
                    <Progress value={28} className="h-2" />

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Age 18-24</span>
                      <span className="text-sm font-medium">18%</span>
                    </div>
                    <Progress value={18} className="h-2" />

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Age 45+</span>
                      <span className="text-sm font-medium">12%</span>
                    </div>
                    <Progress value={12} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Device Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 flex items-center justify-center bg-muted/20 rounded mb-4">
                    <PieChart className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-sm">Mobile</span>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm">Desktop</span>
                      </div>
                      <span className="text-sm font-medium">28%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                        <span className="text-sm">Tablet</span>
                      </div>
                      <span className="text-sm font-medium">7%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm">Campaign started</p>
                        <p className="text-xs text-muted-foreground">
                          2 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm">Budget updated</p>
                        <p className="text-xs text-muted-foreground">
                          1 day ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm">Keywords added</p>
                        <p className="text-xs text-muted-foreground">
                          3 days ago
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Box;
