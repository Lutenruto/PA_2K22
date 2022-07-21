import { InputContainer, InputImg, InputStyled } from "styles";
import { Button } from "../../Button/Button.view";
import { BuyFirstLine, BuySecondLine, BuyStyled } from "./Buy.style";

interface BuyViewProps {
  item: any;
  wallet: any;
  buyItem: () => void;
}
export const BuyView = ({ item, wallet, buyItem }: BuyViewProps) => {
  return (
    <BuyStyled>
      <BuyFirstLine>
        <InputContainer>
          <InputStyled
            type="number"
            placeholder="Price"
            value={item.price}
            disabled
          />
          <InputImg src="/images/solana_logo.png" alt="" />
        </InputContainer>
      </BuyFirstLine>
      <BuySecondLine>
        This item will appear in your wallet in a short time after you buy it
      </BuySecondLine>
      <BuySecondLine>
        <Button
          appearance="primary"
          clickCallback={() => {
            buyItem();
          }}
        >
          Buy this item
        </Button>
      </BuySecondLine>
    </BuyStyled>
  );
};
