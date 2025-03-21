"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

function LogOutButton() {
  const { toast } = useToast();
  const router = useRouter();

  async function handleLogOut() {
    setloading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const errorMesage = null;
    if (!errorMesage) {
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out",
        variant: "success",
      });
      router.push("/");
    } else {
      toast({
        title: "Error",
        description: errorMesage,
        variant: "destructive",
      });
    }
    setloading(false);
  }

  const [loading, setloading] = useState(false);
  return (
    <Button
      variant="outline"
      onClick={handleLogOut}
      className="w-24"
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : <span>Log Out</span>}
    </Button>
  );
}

export default LogOutButton;
