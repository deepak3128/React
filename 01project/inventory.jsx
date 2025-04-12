import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

export default function InventoryManagement() {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Paracetamol", quantity: 1000, threshold: 200 },
    { id: 2, name: "Bandages", quantity: 500, threshold: 100 },
    { id: 3, name: "Syringes", quantity: 2000, threshold: 500 },
  ])

  const [newItem, setNewItem] = useState({ name: '', quantity: 0, threshold: 0 })

  const addItem = () => {
    if (newItem.name && newItem.quantity > 0 && newItem.threshold > 0) {
      setInventory(prev => [...prev, { ...newItem, id: prev.length + 1 }])
      setNewItem({ name: '', quantity: 0, threshold: 0 })
    }
  }

  const updateQuantity = (id, change) => {
    setInventory(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      )
    )
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Add New Item</h2>
        <Input 
          type="text" 
          placeholder="Item Name" 
          value={newItem.name} 
          onChange={(e) => setNewItem(prev => ({ ...prev, name: e.target.value }))}
          className="mb-2"
        />
        <Input 
          type="number" 
          placeholder="Quantity" 
          value={newItem.quantity} 
          onChange={(e) => setNewItem(prev => ({ ...prev, quantity: Number(e.target.value) }))}
          className="mb-2"
        />
        <Input 
          type="number" 
          placeholder="Reorder Threshold" 
          value={newItem.threshold} 
          onChange={(e) => setNewItem(prev => ({ ...prev, threshold: Number(e.target.value) }))}
          className="mb-2"
        />
        <Button onClick={addItem}>Add Item</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Reorder Threshold</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map(item => (
            <TableRow key={item.id} className={item.quantity <= item.threshold ? "bg-red-100" : ""}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.threshold}</TableCell>
              <TableCell>
                <Button onClick={() => updateQuantity(item.id, -1)} className="mr-2">-</Button>
                <Button onClick={() => updateQuantity(item.id, 1)}>+</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
