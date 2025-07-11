import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Bath,
  Bed,
  Bell,
  Calendar,
  Car,
  Eye,
  Filter,
  Grid3X3,
  Heart,
  Home,
  List,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Search,
  Settings,
  Share2,
  Square,
  Star,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";

const Box = (): JSX.Element => {
  const [activeView, setActiveView] = useState("grid");
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Navigation menu items
  const navigationItems = [
    { label: "Dashboard", href: "#", active: true },
    { label: "Listings", href: "#", active: false },
    { label: "Messages", href: "#", active: false },
    { label: "Profile", href: "#", active: false },
  ];

  // Sidebar navigation items
  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: MapPin, label: "Properties", active: false },
    { icon: MessageSquare, label: "Messages", active: false },
    { icon: Heart, label: "Favorites", active: false },
    { icon: Calendar, label: "Schedule", active: false },
    { icon: TrendingUp, label: "Analytics", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  // Property listings data
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      title: "Modern Family Home",
      address: "123 Oak Street, Downtown",
      price: "$850,000",
      beds: 4,
      baths: 3,
      sqft: "2,400",
      parking: 2,
      rating: 4.8,
      reviews: 24,
      featured: true,
      lat: 40.7128,
      lng: -74.006,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
      title: "Luxury Apartment",
      address: "456 Pine Avenue, Midtown",
      price: "$1,200,000",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      parking: 1,
      rating: 4.9,
      reviews: 18,
      featured: false,
      lat: 40.7589,
      lng: -73.9851,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
      title: "Cozy Townhouse",
      address: "789 Maple Drive, Suburbs",
      price: "$650,000",
      beds: 3,
      baths: 2,
      sqft: "1,600",
      parking: 2,
      rating: 4.6,
      reviews: 31,
      featured: false,
      lat: 40.6892,
      lng: -74.0445,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      title: "Contemporary Condo",
      address: "321 Elm Street, City Center",
      price: "$950,000",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      parking: 1,
      rating: 4.7,
      reviews: 15,
      featured: true,
      lat: 40.7505,
      lng: -73.9934,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
      title: "Spacious Villa",
      address: "654 Cedar Lane, Uptown",
      price: "$1,500,000",
      beds: 5,
      baths: 4,
      sqft: "3,200",
      parking: 3,
      rating: 4.9,
      reviews: 42,
      featured: true,
      lat: 40.7831,
      lng: -73.9712,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
      title: "Urban Loft",
      address: "987 Birch Road, Arts District",
      price: "$750,000",
      beds: 2,
      baths: 1,
      sqft: "1,400",
      parking: 1,
      rating: 4.5,
      reviews: 28,
      featured: false,
      lat: 40.7282,
      lng: -74.0776,
    },
  ];

  // Recent activity data
  const recentActivity = [
    {
      id: 1,
      type: "view",
      property: "Modern Family Home",
      time: "2 hours ago",
      icon: Eye,
    },
    {
      id: 2,
      type: "favorite",
      property: "Luxury Apartment",
      time: "4 hours ago",
      icon: Heart,
    },
    {
      id: 3,
      type: "inquiry",
      property: "Cozy Townhouse",
      time: "1 day ago",
      icon: MessageSquare,
    },
    {
      id: 4,
      type: "schedule",
      property: "Contemporary Condo",
      time: "2 days ago",
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">SameSpot</h1>
              </div>
            </div>

            {/* Navigation */}
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                        item.active
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="h-auto p-2">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">Premium Member</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <aside className="col-span-3">
            {/* User Profile Card */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">John Doe</h3>
                    <p className="text-sm text-gray-500">Real Estate Agent</p>
                    <Badge variant="secondary" className="mt-1">
                      Premium
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">24</p>
                    <p className="text-xs text-gray-500">Properties</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">18</p>
                    <p className="text-xs text-gray-500">Sold</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Menu */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {sidebarItems.map((item, index) => (
                    <Button
                      key={index}
                      variant={item.active ? "default" : "ghost"}
                      className="w-full justify-start h-auto py-3"
                    >
                      <item.icon className="h-4 w-4 mr-3" />
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0">
                        <activity.icon className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {activity.property}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="col-span-9">
            {/* Search and Filters */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1 max-w-lg">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search properties, locations..."
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="any">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Price</SelectItem>
                        <SelectItem value="500k">Under $500k</SelectItem>
                        <SelectItem value="1m">Under $1M</SelectItem>
                        <SelectItem value="1m+">$1M+</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" className="h-auto">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant={activeView === "grid" ? "default" : "outline"}
                        size="sm"
                        className="h-auto p-2"
                        onClick={() => setActiveView("grid")}
                      >
                        <Grid3X3 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={activeView === "list" ? "default" : "outline"}
                        size="sm"
                        className="h-auto p-2"
                        onClick={() => setActiveView("list")}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map View */}
            <Card className="mb-6">
              <CardContent className="p-0">
                <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                      <p className="text-gray-600">Interactive Map View</p>
                      <p className="text-sm text-gray-500">
                        Property locations will be displayed here
                      </p>
                    </div>
                  </div>
                  {/* Map markers */}
                  {properties.slice(0, 4).map((property, index) => (
                    <div
                      key={property.id}
                      className={`absolute w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:bg-blue-700 transition-colors ${
                        index === 0
                          ? "top-20 left-32"
                          : index === 1
                            ? "top-32 right-40"
                            : index === 2
                              ? "bottom-32 left-20"
                              : "bottom-20 right-32"
                      }`}
                      onClick={() => setSelectedProperty(property)}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Properties Grid/List */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Featured Properties</h2>
                <p className="text-sm text-gray-500">
                  {properties.length} properties found
                </p>
              </div>

              {activeView === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {properties.map((property) => (
                    <Card
                      key={property.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <div className="relative">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-48 object-cover"
                        />
                        {property.featured && (
                          <Badge className="absolute top-3 left-3 bg-blue-600">
                            Featured
                          </Badge>
                        )}
                        <div className="absolute top-3 right-3 flex space-x-2">
                          <Button
                            variant="secondary"
                            size="sm"
                            className="h-auto p-2"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="secondary"
                            size="sm"
                            className="h-auto p-2"
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg">
                            {property.title}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">
                              {property.rating}
                            </span>
                            <span className="text-xs text-gray-500">
                              ({property.reviews})
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {property.address}
                        </p>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-bold text-blue-600">
                            {property.price}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Bed className="h-4 w-4 mr-1" />
                              {property.beds}
                            </div>
                            <div className="flex items-center">
                              <Bath className="h-4 w-4 mr-1" />
                              {property.baths}
                            </div>
                            <div className="flex items-center">
                              <Square className="h-4 w-4 mr-1" />
                              {property.sqft} sq ft
                            </div>
                            <div className="flex items-center">
                              <Car className="h-4 w-4 mr-1" />
                              {property.parking}
                            </div>
                          </div>
                        </div>
                        <Separator className="my-3" />
                        <div className="flex items-center justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-auto"
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            Call
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-auto"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </Button>
                          <Button size="sm" className="h-auto">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {properties.map((property) => (
                    <Card
                      key={property.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <CardContent className="p-0">
                        <div className="flex">
                          <div className="relative w-64 flex-shrink-0">
                            <img
                              src={property.image}
                              alt={property.title}
                              className="w-full h-48 object-cover"
                            />
                            {property.featured && (
                              <Badge className="absolute top-3 left-3 bg-blue-600">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <div className="flex-1 p-6">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold text-xl mb-1">
                                  {property.title}
                                </h3>
                                <p className="text-gray-600 flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {property.address}
                                </p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm font-medium">
                                    {property.rating}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    ({property.reviews})
                                  </span>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-auto p-2"
                                >
                                  <Heart className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-auto p-2"
                                >
                                  <Share2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-3xl font-bold text-blue-600">
                                {property.price}
                              </span>
                              <div className="flex items-center space-x-6 text-gray-600">
                                <div className="flex items-center">
                                  <Bed className="h-4 w-4 mr-1" />
                                  {property.beds} beds
                                </div>
                                <div className="flex items-center">
                                  <Bath className="h-4 w-4 mr-1" />
                                  {property.baths} baths
                                </div>
                                <div className="flex items-center">
                                  <Square className="h-4 w-4 mr-1" />
                                  {property.sqft} sq ft
                                </div>
                                <div className="flex items-center">
                                  <Car className="h-4 w-4 mr-1" />
                                  {property.parking} parking
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Button variant="outline" className="h-auto">
                                <Phone className="h-4 w-4 mr-2" />
                                Call
                              </Button>
                              <Button variant="outline" className="h-auto">
                                <Mail className="h-4 w-4 mr-2" />
                                Email
                              </Button>
                              <Button className="h-auto">View Details</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Box;
