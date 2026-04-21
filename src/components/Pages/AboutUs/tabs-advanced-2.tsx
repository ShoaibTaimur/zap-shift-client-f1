"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const title = "Controlled Tabs";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("story");
  return (
    <div className="w-full max-w-full space-y-4">
      <Tabs className="space-y-6 bg-[#f5f5f5] rounded-2xl sm:bg-white" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
          <TabsTrigger value="story">Story</TabsTrigger>
          <TabsTrigger value="mission">Mission</TabsTrigger>
          <TabsTrigger value="success">Success</TabsTrigger>
          <TabsTrigger value="terms">Team & Others</TabsTrigger>
        </TabsList>
        <TabsContent value="story">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <p className="mb-4 text-sm text-muted-foreground">
              We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="mission">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <p className="mb-4 text-sm text-muted-foreground">
              Our mission is to provide fast, reliable, and secure delivery solutions that connect people and businesses without friction. We aim to simplify logistics through smart systems, real-time tracking, and a customer-first approach. Every package we handle is treated with care and responsibility, ensuring it reaches its destination safely and on time.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="success">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <p className="mb-4 text-sm text-muted-foreground">
              Success for us is measured not just by the number of deliveries completed, but by the trust we build with every customer. Consistency, efficiency, and transparency drive our growth. By continuously improving our operations and adapting to changing demands, we ensure that our service remains dependable and competitive in a fast-moving world.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="terms">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <p className="mb-4 text-sm text-muted-foreground">
              Our strength lies in our team—dedicated professionals who work with precision and accountability at every step of the delivery process. From drivers to support staff, each member plays a critical role in maintaining service quality. We also value our partners and clients, fostering strong relationships that help us grow together and deliver excellence consistently.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tab;
