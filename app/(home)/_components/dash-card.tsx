import AddTransactionButton from "@/app/_components/buttons/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface DashCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}

const DashCard = ({ icon, title, amount, size = "small" }: DashCardProps) => {
  return (
    <Card className={`${size === "large" ? "bg-white bg-opacity-5" : ""}`}>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={`${size === "small" ? "text-muted-foreground" : "text-2xl text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`font-bold ${size === "small" ? "text-2xl" : "text-4xl"}`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default DashCard;
