import matplotlib.pyplot as plt
import numpy as np

c=float(input('Qual o valor investido? '))
i=int(input('Qual a taxa? '))
t=int(input('Por quanto tempo? '))

período= np.arange(0,t+1)
montante= c*(1+i)**período

plt.figure(figsize=(10,6))
plt.plot(período,montante,color='blue', marker='o',linestyle='-',label='juros compostos')
plt.legend()
plt.xlabel('Período')
plt.ylabel('Montante')
plt.title('Gráfico de juros compostos')
plt.grid(True)
plt.tight_layout()
plt.show()