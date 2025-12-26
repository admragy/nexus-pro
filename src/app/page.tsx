import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="glass card p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          مرحباً بك في Nexus Pro CRM v8.0
        </h1>
        <p className="text-gray-300 mb-8">
          نظام إدارة علاقات العملاء بالذكاء الاصطناعي
        </p>
        <Button className="btn-primary px-8 py-6 text-lg">
          ابدأ الآن
        </Button>
      </Card>
    </div>
  );
}
