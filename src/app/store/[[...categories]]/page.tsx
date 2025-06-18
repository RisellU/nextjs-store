interface CategoryProps {
  params: Promise<{
    categories: string[];
  }>;
  searchParams: Promise<{
    id: string;
  }>;
}

export default async function Category(props: CategoryProps) {

  const { categories } = (await props.params)
  const { id } = (await props.searchParams)

  console.log(categories, id);

  return <h1>Categoria dinámica: {categories}</h1>;
}
