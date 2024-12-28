interface updateWithOptions{
    name?: string;
    description?: string;
    price?: number;
  }


export class Product {
  // public id: string;
  // public name: string;
  // public desciption?: string;
  // public price: number;

  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
  ) {}

  updateWith({
    name,
    description,
    price,
  }: updateWithOptions) {
    this.name = name ?? this.name;
    this.description = description ?? this.description;
    this.price = price ?? this.price;
  }
}
