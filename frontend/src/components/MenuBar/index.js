import React from "react"
import { LightBulb as Light } from "@styled-icons/octicons/LightBulb"
import { ArrowUpCircle as Arrow } from "@styled-icons/ionicons-outline/ArrowUpCircle"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"

import * as S from "./styles"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarLink to="/search/">
      <Search />
    </S.MenuBarLink>
    <S.MenuBarItem title="mudar tema">
      <Light />
    </S.MenuBarItem>
    <S.MenuBarItem title="ir para o topo">
      <Arrow />
    </S.MenuBarItem>
  </S.MenuBarWrapper>
)

export default MenuBar
