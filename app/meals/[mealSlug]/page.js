export async function generateStaticParams() {
  return [];
}

export default function MealDetailsPage({ params }) {
  return <h1>Meal Details {params.mealSlug}</h1>;
}
