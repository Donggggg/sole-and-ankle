import styled from 'styled-components/macro';
import {COLORS} from "../../constants";

const Flag = ({type}) => {
    return <Wrapper type={type}>{
        type === 'on-sale' ?'Saled' : 'Just Released!'
    }</Wrapper>
}

const colorLookup = {
    'on-sale': COLORS.primary,
    'new-release':COLORS.secondary
}
const Wrapper = styled.div`
  background-color: ${p => colorLookup[p.type]};
  color: ${COLORS.white};
  position: absolute;
  top: 12px;
  right: -4px;
  padding: 7px 9px 9px 10px;
  border-radius: 2px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`;

export default Flag;