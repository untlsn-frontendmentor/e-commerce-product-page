const useImages = (imagesLength: number) => {
  const imagesIndex = imagesLength - 1;
  const curImage = ref(0);
  const curImageAnim = ref(0);
  const imagePos = computed<number>(() => {
    if (curImage.value == curImageAnim.value) return 0;
    if (curImage.value < curImageAnim.value) return -1;
    return 1;
  });

  watchEffect(() => {
    if (curImageAnim.value < 0) curImageAnim.value = 0;
    else if (curImageAnim.value > imagesIndex) curImageAnim.value = imagesIndex;
  });

  watchEffect(() => {
    if (imagePos.value != 0) {
      setTimeout(() => {
        curImage.value = curImageAnim.value;
      }, 500);
    }
  });

  return { curImage, curImageAnim, imagePos };
};

export default useImages;
