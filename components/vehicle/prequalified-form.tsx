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

interface PrequalifiedFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrequalifiedForm({ isOpen, onClose }: PrequalifiedFormProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Get pre-qualified</DialogTitle>
        </DialogHeader>

        <form className="space-y-6">
          {/* Personal Information */}
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
          </div>

          {/* Financial Information */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="income">Annual income</Label>
              <Input
                id="income"
                type="number"
                placeholder="Enter annual income"
              />
            </div>

            <div>
              <Label htmlFor="downPayment">Down payment</Label>
              <Input
                id="downPayment"
                type="number"
                placeholder="Enter down payment amount"
              />
            </div>
          </div>

          <div className="text-xs text-gray-500">
            By clicking "Check eligibility," you authorize us to check your
            credit score. This will not affect your credit score.
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="flex-1">
              Check eligibility
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
