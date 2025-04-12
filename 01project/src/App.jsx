import React from 'react'
import { useQuery } from 'react-query'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function Dashboard() {
  const { data: readings, isLoading: readingsLoading } = useQuery('readings', fetchReadings)
  const { data: alarms, isLoading: alarmsLoading } = useQuery('alarms', fetchAlarms)

  if (readingsLoading || alarmsLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">DWLR Analysis Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Latest DWLR Readings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>DWLR ID</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Water Level</TableHead>
                  <TableHead>Battery</TableHead>
                  <TableHead>Temperature</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {readings.map((reading) => (
                  <TableRow key={reading.id}>
                    <TableCell>{reading.dwlrId}</TableCell>
                    <TableCell>{new Date(reading.timestamp).toLocaleString()}</TableCell>
                    <TableCell>{reading.waterLevel} m</TableCell>
                    <TableCell>{reading.battery}%</TableCell>
                    <TableCell>{reading.temperature}°C</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Alarms</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>DWLR ID</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alarms.map((alarm) => (
                  <TableRow key={alarm.id}>
                    <TableCell>{alarm.dwlrId}</TableCell>
                    <TableCell>{new Date(alarm.timestamp).toLocaleString()}</TableCell>
                    <TableCell>{alarm.type}</TableCell>
                    <TableCell>{alarm.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

async function fetchReadings() {
  const res = await fetch('/api/readings')
  return res.json()
}

async function fetchAlarms() {
  const res = await fetch('/api/alarms')
  return res.json()
}