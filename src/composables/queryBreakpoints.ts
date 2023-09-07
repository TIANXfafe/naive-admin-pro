export const breakpointsEnum = {
  xl: 1600,
  lg: 1199,
  md: 991,
  sm: 767,
  xs: 575,
}

export const useQueryBreakpoints = () => {
  const breakpoints = reactive(useBreakpoints(breakpointsEnum))
  // 移动端
  const isMobile = breakpoints.smaller('sm')
  // 平板
  const isPad = breakpoints.between('sm', 'md')
  // PC
  const isDesktop = breakpoints.greater('md')
  return {
    breakpoints,
    isMobile,
    isPad,
    isDesktop,
  }
}
