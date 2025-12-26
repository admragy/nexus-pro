"use client";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Deal {
  id: string;
  title: string;
  value: number;
  client: string;
}

interface Column {
  id: string;
  title: string;
  deals: Deal[];
}

const initialData: Record<string, Column> = {
  new: { id: "new", title: "صفقات جديدة", deals: [
    { id: "1", title: "مشروع موقع شركة X", value: 50000, client: "أحمد محمد" },
    { id: "2", title: "حملة إعلانية لمتجر Y", value: 30000, client: "سارة علي" },
  ]},
  qualified: { id: "qualified", title: "مؤهلة", deals: [] },
  negotiation: { id: "negotiation", title: "تحت التفاوض", deals: [] },
  won: { id: "won", title: "فوز", deals: [] },
  lost: { id: "lost", title: "خسارة", deals: [] },
};

export default function Pipeline() {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];

    const sourceDeals = [...sourceColumn.deals];
    const destDeals = source.droppableId === destination.droppableId ? sourceDeals : [...destColumn.deals];

    const [removed] = sourceDeals.splice(source.index, 1);
    destDeals.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, deals: sourceDeals },
      [destination.droppableId]: { ...destColumn, deals: destDeals },
    });
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        خط أنابيب الصفقات (Pipeline)
      </h1>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {Object.values(columns).map((column) => (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided, snapshot) => (
                <Card className={`glass card ${snapshot.isDraggingOver ? "border-purple-400 border-2" : ""}`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{column.title} ({column.deals.length})</CardTitle>
                  </CardHeader>
                  <CardContent
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="min-h-96 space-y-4"
                  >
                    {column.deals.map((deal, index) => (
                      <Draggable key={deal.id} draggableId={deal.id} index={index}>
                        {(provided, snapshot) => (
                          <Card
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`p-4 cursor-grab ${snapshot.isDragging ? "opacity-50 rotate-3" : ""}`}
                          >
                            <h4 className="font-bold">{deal.title}</h4>
                            <p className="text-sm text-gray-400">{deal.client}</p>
                            <p className="text-lg font-bold text-green-400 mt-2">ر.س. {deal.value.toLocaleString()}</p>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    {column.deals.length === 0 && (
                      <p className="text-center text-gray-500 py-8">لا توجد صفقات</p>
                    )}
                  </CardContent>
                </Card>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      <div className="mt-8 text-center">
        <Button className="btn-primary px-8 py-6 text-lg">
          إضافة صفقة جديدة
        </Button>
      </div>
    </div>
  );
}
