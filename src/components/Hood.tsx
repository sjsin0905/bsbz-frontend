import { Helmet } from "react-helmet";

interface IHoodProps {
  title: string;
}

export default function Hood({ title }: IHoodProps) {
  return (
    <Helmet>
      <title>{`${title}\t|\t벌써부자`}</title>
    </Helmet>
  );
}
