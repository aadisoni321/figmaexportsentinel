import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  BarChart3,
  Bell,
  Calendar,
  Click,
  DollarSign,
  Eye,
  Filter,
  MoreHorizontal,
  PieChart,
  Search,
  Settings,
  Target,
  TrendingDown,
  TrendingUp,
  User,
} from "lucide-react";
import React, { useState } from "react";

const Box = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCampaign, setSelectedCampaign] = useState("summer-sale");

  const navigationItems = [
    { label: "Dashboard", active: true },
    { label: "Campaigns", active: false },
    { label: "Analytics", active: false },
    { label: "Settings", active: false },
  ];

  const campaigns = [
    {
      id: "summer-sale",
      name: "Summer Sale 2024",
      status: "Active",
      budget: "$5,000",
      spent: "$3,200",
      impressions: "125K",
      clicks: "8.5K",
      ctr: "6.8%",
      conversions: "342",
      roi: "245%",
      startDate: "2024-06-01",
      endDate: "2024-08-31",
    },
    {
      id: "back-to-school",
      name: "Back to School",
      status: "Paused",
      budget: "$3,500",
      spent: "$1,800",
      impressions: "89K",
      clicks: "5.2K",
      ctr: "5.8%",
      conversions: "198",
      roi: "180%",
      startDate: "2024-07-15",
      endDate: "2024-09-15",
    },
    {
      id: "holiday-promo",
      name: "Holiday Promotion",
      status: "Draft",
      budget: "$8,000",
      spent: "$0",
      impressions: "0",
      clicks: "0",
      ctr: "0%",
      conversions: "0",
      roi: "0%",
      startDate: "2024-11-01",
      endDate: "2024-12-31",
    },
  ];

  const performanceMetrics = [
    {
      title: "Total Impressions",
      value: "2.4M",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
    },
    {
      title: "Total Clicks",
      value: "156K",
      change: "+8.2%",
      trend: "up",
      icon: Click,
    },
    {
      title: "Total Spend",
      value: "$12,450",
      change: "-3.1%",
      trend: "down",
      icon: DollarSign,
    },
    {
      title: "Conversions",
      value: "1,234",
      change: "+15.7%",
      trend: "up",
      icon: Target,
    },
  ];

  const audienceData = [
    { segment: "18-24", percentage: 25, color: "bg-blue-500" },
    { segment: "25-34", percentage: 35, color: "bg-green-500" },
    { segment: "35-44", percentage: 22, color: "bg-yellow-500" },
    { segment: "45-54", percentage: 12, color: "bg-red-500" },
    { segment: "55+", percentage: 6, color: "bg-purple-500" },
  ];

  const topPerformingAds = [
    {
      id: "ad-001",
      name: "Summer Collection Banner",
      impressions: "45K",
      clicks: "3.2K",
      ctr: "7.1%",
      conversions: "128",
      spend: "$890",
    },
    {
      id: "ad-002",
      name: "Flash Sale Video",
      impressions: "38K",
      clicks: "2.8K",
      ctr: "7.4%",
      conversions: "115",
      spend: "$720",
    },
    {
      id: "ad-003",
      name: "Product Showcase",
      impressions: "42K",
      clicks: "2.5K",
      ctr: "5.9%",
      conversions: "99",
      spend: "$650",
    },
  ];

  const recentActivity = [
    {
      action: "Campaign 'Summer Sale 2024' budget increased",
      time: "2 hours ago",
      user: "John Doe",
    },
    {
      action: "New ad creative uploaded to 'Back to School'",
      time: "4 hours ago",
      user: "Jane Smith",
    },
    {
      action: "Campaign 'Holiday Promotion' created",
      time: "1 day ago",
      user: "Mike Johnson",
    },
    {
      action: "Performance report generated",
      time: "2 days ago",
      user: "System",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">SameSpot</span>
            </div>
            <nav className="flex space-x-6">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant={item.active ? "default" : "ghost"}
                  className="h-auto px-4 py-2"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="h-auto p-2">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-auto p-2">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-auto p-2">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="" alt="User" />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Campaigns</h2>
              <Button size="sm" className="h-auto px-3 py-1">
                New Campaign
              </Button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search campaigns..." className="pl-10" />
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-auto px-3 py-1"
                >
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Select defaultValue="all">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              {campaigns.map((campaign) => (
                <Card
                  key={campaign.id}
                  className={`cursor-pointer transition-colors ${
                    selectedCampaign === campaign.id
                      ? "ring-2 ring-blue-500"
                      : ""
                  }`}
                  onClick={() => setSelectedCampaign(campaign.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-900 text-sm">
                        {campaign.name}
                      </h3>
                      <Badge
                        variant={
                          campaign.status === "Active"
                            ? "default"
                            : campaign.status === "Paused"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="flex justify-between">
                        <span>Budget:</span>
                        <span>{campaign.budget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Spent:</span>
                        <span>{campaign.spent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CTR:</span>
                        <span>{campaign.ctr}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Campaign Dashboard
            </h1>
            <p className="text-gray-600">
              Monitor and optimize your advertising campaigns
            </p>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {performanceMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {metric.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {metric.value}
                      </p>
                      <div className="flex items-center mt-1">
                        {metric.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                        )}
                        <span
                          className={`text-sm ${
                            metric.trend === "up"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {metric.change}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <metric.icon className="h-6 w-6 text-gray-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Tabs */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="audience">Audience</TabsTrigger>
              <TabsTrigger value="creatives">Creatives</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Campaign Performance Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Campaign Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">
                        Performance Chart Placeholder
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Audience Demographics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PieChart className="h-5 w-5 mr-2" />
                      Audience Demographics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {audienceData.map((segment, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-3 h-3 rounded-full ${segment.color}`}
                            ></div>
                            <span className="text-sm text-gray-700">
                              {segment.segment}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Progress
                              value={segment.percentage}
                              className="w-20"
                            />
                            <span className="text-sm font-medium text-gray-900">
                              {segment.percentage}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Top Performing Ads */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Ads</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ad Name</TableHead>
                        <TableHead>Impressions</TableHead>
                        <TableHead>Clicks</TableHead>
                        <TableHead>CTR</TableHead>
                        <TableHead>Conversions</TableHead>
                        <TableHead>Spend</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topPerformingAds.map((ad) => (
                        <TableRow key={ad.id}>
                          <TableCell className="font-medium">
                            {ad.name}
                          </TableCell>
                          <TableCell>{ad.impressions}</TableCell>
                          <TableCell>{ad.clicks}</TableCell>
                          <TableCell>{ad.ctr}</TableCell>
                          <TableCell>{ad.conversions}</TableCell>
                          <TableCell>{ad.spend}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-auto p-1"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">
                      Detailed Performance Analytics Placeholder
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="audience" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">
                      Audience Insights Placeholder
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="creatives" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Creative Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">
                      Creative Performance Placeholder
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 bg-white border-l border-gray-200 h-screen overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Campaign Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Campaign Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {campaigns
                  .filter((campaign) => campaign.id === selectedCampaign)
                  .map((campaign) => (
                    <div key={campaign.id} className="space-y-3">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {campaign.name}
                        </h3>
                        <Badge
                          variant={
                            campaign.status === "Active"
                              ? "default"
                              : campaign.status === "Paused"
                                ? "secondary"
                                : "outline"
                          }
                          className="mt-1"
                        >
                          {campaign.status}
                        </Badge>
                      </div>
                      <Separator />
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Budget:</span>
                          <span className="font-medium">{campaign.budget}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Spent:</span>
                          <span className="font-medium">{campaign.spent}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Impressions:</span>
                          <span className="font-medium">
                            {campaign.impressions}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Clicks:</span>
                          <span className="font-medium">{campaign.clicks}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">CTR:</span>
                          <span className="font-medium">{campaign.ctr}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Conversions:</span>
                          <span className="font-medium">
                            {campaign.conversions}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">ROI:</span>
                          <span className="font-medium text-green-600">
                            {campaign.roi}
                          </span>
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Start: {campaign.startDate}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>End: {campaign.endDate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          {activity.action}
                        </p>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <span>{activity.time}</span>
                          <span className="mx-1">•</span>
                          <span>{activity.user}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full h-auto py-2" variant="outline">
                  <Target className="h-4 w-4 mr-2" />
                  Create New Campaign
                </Button>
                <Button className="w-full h-auto py-2" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button className="w-full h-auto py-2" variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Campaign Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Box;
