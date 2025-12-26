import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Leads() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        العملاء المحتملين
      </h1>

      <Card className="glass card">
        <CardHeader>
          <CardTitle>قائمة الليدز</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 mb-4">سيتم عرض الليدز من الحملات هنا...</p>
          <Button className="btn-success">
            تصدير إلى Excel
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
