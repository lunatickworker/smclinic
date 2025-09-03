import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Play, X } from "lucide-react";

interface DemoModalProps {
  trigger?: React.ReactNode;
  children?: React.ReactNode;
}

export default function DemoModal({ trigger, children }: DemoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const triggerButton = trigger || children || (
    <button className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-2xl border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all shadow-lg bg-white font-medium h-12">
      <Play className="w-5 h-5" />
      데모 영상 보기
    </button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-full h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-center">
            EasyMedi 데모 - Antetak.com
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 p-6 pt-4">
          <div className="w-full h-full rounded-lg overflow-hidden border">
            <iframe
              src="http://antetak.com/"
              className="w-full h-full"
              title="EasyMedi Demo"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}