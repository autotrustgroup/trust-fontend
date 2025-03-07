"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface CheckAvailabilityProps {
  isOpen: boolean;
  onClose: () => void;
  vehicleData: {
    title: string;
    price: number;
    dealer: {
      name: string;
    };
  };
}

export function CheckAvailability({
  isOpen,
  onClose,
  vehicleData,
}: CheckAvailabilityProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Check availability</DialogTitle>
        </DialogHeader>

        <div className="mb-6">
          <h3 className="font-medium">{vehicleData.title}</h3>
          <p className="text-lg font-bold">
            ${vehicleData.price.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">at {vehicleData.dealer.name}</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="Enter first name" />
              </div>
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Enter last name" />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" placeholder="(000) 000-0000" />
            </div>

            <div>
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea
                id="message"
                placeholder="I'm interested in this vehicle and would like to know more about its availability."
                rows={4}
              />
            </div>
          </div>

          <div className="text-xs text-gray-500">
            By clicking "Send," you agree to receive text messages and calls
            about this vehicle. Message/data rates may apply. Consent is not
            required for purchase.
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="flex-1">
              Send
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
