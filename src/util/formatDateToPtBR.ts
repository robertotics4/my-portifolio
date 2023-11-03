export function formatDateToPtBR(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
  }).format(date)
}
