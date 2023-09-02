"use client";

import DocumentIcon from "@/icons/DocumentIcon";
import React from "react";
import CampaignForm from "./campaign-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const CampaignModal = ({
  isNew = true,
  onSave,
}: {
  isNew?: boolean;
  onSave: Parameters<typeof CampaignForm>["0"]["onSave"];
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-primary text-white">
            <DocumentIcon className="mr-2 h-4 w-4" />
            {isNew ? "Create" : "Update"} a campaign
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <div className="relative z-20 flex items-center text-lg font-medium">
                <DocumentIcon className="mr-2 h-4 w-4" />
                {isNew ? "Create" : "Update"} a campaign
              </div>
            </DialogTitle>
          </DialogHeader>
          <CampaignForm
            onSave={(d) => {
              setOpen(false);
              return onSave(d);
            }}
          >
            <DialogFooter>
              <Button type="submit" className="bg-primary text-white">
                Submit your comment
              </Button>
            </DialogFooter>
          </CampaignForm>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CampaignModal;
