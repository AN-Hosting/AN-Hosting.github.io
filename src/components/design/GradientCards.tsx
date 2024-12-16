import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const GradientCards = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Gradient Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="dayz-style-1">
          <CardHeader>
            <CardTitle>Dark Gray Gradient</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Background gradient from gray-900 to gray-800</p>
          </CardContent>
        </Card>

        <Card className="dayz-style-2">
          <CardHeader>
            <CardTitle>Green Gradient</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Background gradient from green-900 to green-800</p>
          </CardContent>
        </Card>

        <Card className="dayz-style-3">
          <CardHeader>
            <CardTitle>Blue Gradient</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Background gradient from blue-900 to blue-800</p>
          </CardContent>
        </Card>

        <Card className="dayz-style-4">
          <CardHeader>
            <CardTitle>Red Gradient</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Background gradient from red-900 to red-800</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};