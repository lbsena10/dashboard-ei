import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Eye, MapPin, DollarSign } from "lucide-react";

interface Client {
  id: string;
  name: string;
  property: string;
  value: string;
  status: string;
  broker: string;
  portal: string;
  visits: number;
}

const clientData: Client[] = [
  {
    id: "1",
    name: "Adalberto da Oliveira Mendes",
    property: "2475",
    value: "R$ 1.500,00",
    status: "ALUGUEL",
    broker: "Jessica Lima",
    portal: "Portal A",
    visits: 280,
  },
  {
    id: "2",
    name: "ADRIANO - 185678",
    property: "3475",
    value: "R$ 2.600,00",
    status: "ALUGUEL",
    broker: "Renata Ribeiro",
    portal: "Portal B",
    visits: 150,
  },
  {
    id: "3",
    name: "Alessandra Marques Grosso Mendes",
    property: "2365",
    value: "R$ 3.500,00",
    status: "ALUGUEL",
    broker: "Vivian Gama",
    portal: "Portal A",
    visits: 320,
  },
  {
    id: "4",
    name: "Alex Reis Advogado",
    property: "27693",
    value: "R$ 2.850,00",
    status: "ALUGUEL",
    broker: "Adriana Webster",
    portal: "Portal C",
    visits: 180,
  },
  {
    id: "5",
    name: "ALINE - 144746",
    property: "2365",
    value: "R$ 3.700,00",
    status: "ALUGUEL",
    broker: "Giulia Mazzuca",
    portal: "Portal A",
    visits: 220,
  },
  {
    id: "6",
    name: "ALINE - 198570",
    property: "13956",
    value: "R$ 2.200,00",
    status: "ALUGUEL",
    broker: "Vivian Gama",
    portal: "Portal B",
    visits: 95,
  },
  {
    id: "7",
    name: "ALINE - 226904",
    property: "3024",
    value: "R$ 3.000,00",
    status: "ALUGUEL",
    broker: "Renata Ribeiro",
    portal: "Portal A",
    visits: 145,
  },
  {
    id: "8",
    name: "ALINE - 787432",
    property: "33566",
    value: "R$ 4.200,00",
    status: "ALUGUEL",
    broker: "Adriana Webster",
    portal: "Portal C",
    visits: 275,
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "ALUGUEL":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "VENDA":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
}

export function ClientTable() {
  return (
    <Card className="bg-slate-800 border-slate-700 col-span-full">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Eye className="w-5 h-5" />
          Dados dos Clientes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700 hover:bg-slate-700/50">
                <TableHead className="text-slate-300">Cliente</TableHead>
                <TableHead className="text-slate-300">Imóvel</TableHead>
                <TableHead className="text-slate-300">Valor</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Corretor</TableHead>
                <TableHead className="text-slate-300">Portal</TableHead>
                {/*<TableHead className="text-slate-300">Visitas</TableHead>*/}
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientData.map((client) => (
                <TableRow
                  key={client.id}
                  className="border-slate-700 hover:bg-slate-700/30 transition-colors"
                >
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                        {client.name.charAt(0)}
                      </div>
                      <span className="truncate max-w-[200px]">
                        {client.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-300">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      {client.property}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-300">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      {client.value}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(client.status)}>
                      {client.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">
                    {client.broker}
                  </TableCell>
                  <TableCell className="text-slate-300">
                    {client.portal}
                  </TableCell>
                  {/*<TableCell className="text-slate-300">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4 text-blue-400" />
                      {client.visits}
                    </div>
                  </TableCell>*/}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
