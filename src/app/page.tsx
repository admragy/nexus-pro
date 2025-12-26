import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon, Users, DollarSign, TrendingUp, MessageSquare } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
}

const StatCard = ({ title, value, change, icon: Icon, color }: StatCardProps) => (
  <Card className="glass card">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-300">{title}</CardTitle>
      <Icon className={`h-5 w-5 ${color}`} />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-green-400 mt-1">{change}</p>
    </CardContent>
  </Card>
);

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        لوحة التحكم
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="إجمالي العملاء" value="1,234" change="+12% هذا الشهر" icon={Users} color="text-purple-400" />
        <StatCard title="الإيرادات" value="ر.س. 45,678" change="+8% هذا الشهر" icon={DollarSign} color="text-green-400" />
        <StatCard title="الحملات النشطة" value="23" change="+5 جديدة" icon={TrendingUp} color="text-pink-400" />
        <StatCard title="الرسائل اليوم" value="567" change="+23% نشاط" icon={MessageSquare} color="text-cyan-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass card">
          <CardHeader>
            <CardTitle>أحدث العملاء</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">سيتم عرض أحدث الليدز هنا قريبًا...</p>
          </CardContent>
        </Card>

        <Card className="glass card">
          <CardHeader>
            <CardTitle>أداء الحملات</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">رسوم بيانية لأداء الإعلانات الممولة...</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Button className="btn-primary px-8 py-6 text-lg">
          ابدأ حملة جديدة
        </Button>
      </div>
    </div>
  );
}
