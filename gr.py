import matplotlib.pyplot as plt

x = [2021,2023,2025]
y = [16, 21 ,30]   # rondonia
y2 = [21, 19, 22]    # acre
y3 = [14, 16, 20]    # sp

plt.plot(x, y, marker="o", label="Rondônia",  color='green')
plt.plot(x, y2, marker="s", label="Acre", color='red')
plt.plot(x, y3,  marker="^", label="São Paulo", color= 'blue')

plt.title("Estados com maior poluição atmosférica", color='chocolate', fontsize=15)
plt.xlabel('Anos', color='navy')
plt.ylabel("índice de medição (µg/m³)", color='navy')
plt.legend()
plt.tight_layout()
plt.grid(True)
plt.show()
