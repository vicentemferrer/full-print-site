export type ServiceCategory =
  | "docs"
  | "pict"
  | "mktg"
  | "dsgn"
  | "misc"
  | "all";

export interface ServiceFormat {
  type: string;
  width: number;
  height: number;
  unit: string;
  description: string;
  img: string;
}

export interface Offering {
  id: string;
  name: string;
  description: string;
  img: string;
}

export interface Service extends Offering {
  category: ServiceCategory[];
  formats?: ServiceFormat[];
}

export type ServicesByCategory = {
  [K in ServiceCategory]: Service[];
};

export type ServiceWithFormats = Service & {
  formats: ServiceFormat[];
};

export function hasFormats(service: Service): service is ServiceWithFormats {
  return service.formats !== undefined && service.formats.length > 0;
}

export function filterServicesByCategory(
  services: Service[],
  category: ServiceCategory,
): Service[] {
  return services.filter((service) => service.category.includes(category));
}

export function filterServicesByCategories(
  services: Service[],
  categories: ServiceCategory[],
): Service[] {
  return services.filter((service) =>
    categories.some((cat) => service.category.includes(cat)),
  );
}

export interface Filters {
  category: ServiceCategory;
  query: string;
}

export interface Photo {
  name: string;
  widthPx: number;
  heightPx: number;
  authorAttributions: Array<{
    displayName: string;
    uri: string;
    photoUri: string;
  }>;
  flagContentUri: string;
  googleMapsUri: string;
}

type Icon = {
  variant: string;
  suffix: string;
};

interface Link {
  icon?: string | Icon;
  title?: string;
  url: string;
}

interface CategoryOption {
  name: string;
  id: ServiceCategory;
}

export type { Link, CategoryOption };
