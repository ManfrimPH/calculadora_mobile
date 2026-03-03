# 📱 Calculadora React Native

Uma calculadora mobile moderna e funcional desenvolvida com **React Native** e **Expo**, apresentando uma interface estilo *Dark Mode* inspirada em sistemas operacionais modernos.

## ✨ Funcionalidades

* **Operações Matemáticas**: Soma, subtração, multiplicação e divisão.
* **Funções Especiais**: 
    * Cálculo de Raiz Quadrada (`√`).
    * Cálculo de Porcentagem (`%`).
* **Lógica Anti-Erro**: 
    * Impede a inserção de operadores duplicados (ex: `++` ou `xx`).
    * Substituição automática de operadores caso o usuário mude de ideia.
    * Tratamento de erros para operações inválidas via `try/catch`.
* **Interface Responsiva**: Utiliza `Flexbox` para se ajustar a diferentes tamanhos de tela e `SafeAreaView` para respeitar as bordas do dispositivo (notch).
