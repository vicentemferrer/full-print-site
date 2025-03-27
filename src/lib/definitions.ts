type Icon = {
  variant: string;
  suffix: string;
};

interface Link {
  icon?: string | Icon;
  title?: string;
  url: string;
}

export type { Link };
