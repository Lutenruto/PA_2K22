import { useState } from "react";
import { InputContainer, InputImg, InputStyled } from "styles";
import { Button } from "../../Button/Button.view";
import { SellFirstLine, SellSecondLine, SellStyled } from "./Sell.style";

interface SellViewProps {
  item: any;
  wallet: any;
  sellItem: (price: number) => void;
}
export const SellView = ({ item, wallet, sellItem }: SellViewProps) => {
  const [price, setPrice] = useState(0);
  return (
    <SellStyled>
      <SellFirstLine>
        <InputContainer>
          <InputStyled
            type="number"
            placeholder="Price"
            min={0.01}
            step={0.01}
            onChange={(event) => setPrice(parseFloat(event.target.value))}
          />
          <InputImg src="/images/solana_logo.png" alt="" />
        </InputContainer>
      </SellFirstLine>
      <SellSecondLine>
        This item will no longer appear in your wallet while in sell
      </SellSecondLine>
      <SellSecondLine>
        <Button
          appearance={price > 0 ? "primary" : "disabled"}
          clickCallback={() => {
            if (price > 0) {
              sellItem(price);
            }
          }}
        >
          Sell this item
        </Button>
      </SellSecondLine>
    </SellStyled>
  );
};
