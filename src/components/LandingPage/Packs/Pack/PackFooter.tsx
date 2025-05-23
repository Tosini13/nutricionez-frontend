import { ButtonLink } from "@/components/Form/Button";

type PackFooterPropsType = {
  recommended?: boolean;
};

const PackFooter: React.FC<PackFooterPropsType> = ({ recommended }) => (
  <div data-test-id="pack_footer" className="flex items-center justify-center">
    <ButtonLink alternative={!recommended} href="#contact">
      Pide Cita
    </ButtonLink>
  </div>
);

export default PackFooter;
