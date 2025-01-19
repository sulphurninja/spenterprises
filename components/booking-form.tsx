'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarIcon, Train, Plane, Bus } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export default function BookingForm() {
  const [date, setDate] = useState<Date>()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Book Your Journey</h2>
        <Tabs defaultValue="train" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="train">
              <Train className="mr-2 h-4 w-4" />
              Train
            </TabsTrigger>
            <TabsTrigger value="flight">
              <Plane className="mr-2 h-4 w-4" />
              Flight
            </TabsTrigger>
            <TabsTrigger value="bus">
              <Bus className="mr-2 h-4 w-4" />
              Bus
            </TabsTrigger>
          </TabsList>
          <TabsContent value="train">
            <Card className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <CardHeader>
                <CardTitle>Book Train Tickets</CardTitle>
                <CardDescription>Enter your journey details to book train tickets.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="from">From</Label>
                  <Input id="from" placeholder="Enter departure station" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="to">To</Label>
                  <Input id="to" placeholder="Enter arrival station" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="date">Date of Journey</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="class">Class</Label>
                  <Select>
                    <SelectTrigger id="class">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="1a">First AC</SelectItem>
                      <SelectItem value="2a">Second AC</SelectItem>
                      <SelectItem value="3a">Third AC</SelectItem>
                      <SelectItem value="sl">Sleeper</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Search Trains</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="flight">
            <Card className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <CardHeader>
                <CardTitle>Book Flight Tickets</CardTitle>
                <CardDescription>Enter your journey details to book flight tickets.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="from-airport">From</Label>
                  <Input id="from-airport" placeholder="Enter departure airport" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="to-airport">To</Label>
                  <Input id="to-airport" placeholder="Enter arrival airport" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="flight-date">Date of Journey</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-1">
                  <Label>Trip Type</Label>
                  <RadioGroup defaultValue="oneway" className="flex">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="oneway" id="oneway" />
                      <Label htmlFor="oneway">One Way</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="roundtrip" id="roundtrip" />
                      <Label htmlFor="roundtrip">Round Trip</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Search Flights</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="bus">
            <Card className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <CardHeader>
                <CardTitle>Book Bus Tickets</CardTitle>
                <CardDescription>Enter your journey details to book bus tickets.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="from-bus">From</Label>
                  <Input id="from-bus" placeholder="Enter departure city" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="to-bus">To</Label>
                  <Input id="to-bus" placeholder="Enter arrival city" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="bus-date">Date of Journey</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="bus-type">Bus Type</Label>
                  <Select>
                    <SelectTrigger id="bus-type">
                      <SelectValue placeholder="Select bus type" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="ac">AC</SelectItem>
                      <SelectItem value="non-ac">Non-AC</SelectItem>
                      <SelectItem value="sleeper">Sleeper</SelectItem>
                      <SelectItem value="seater">Seater</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Search Buses</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

