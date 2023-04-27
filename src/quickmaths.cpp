#include <cmath>
#include <iostream>

extern "C" {
  // Bitwise Floor
  int Floor(double x) {
    int xi = static_cast<int>(x);
    return x < xi ? xi - 1 : xi;
  }

  // Bitwise Round
  int Round(double x) {
    return floor(x + 0.5);
  }

  // Bitwise Ceil
  int Ceil(double x) {
    int xi = static_cast<int>(x);
    return x > xi ? xi + 1 : xi;
  }

  // Absolute value
  double Abs(double x) {
    return x < 0 ? -x : x;
  }

  // Minimum value
  double Min(double a, double b) {
    return a < b ? a : b;
  }

  // Maximum value
  double Max(double a, double b) {
    return a > b ? a : b;
  }

 
}

int main() {
  return 0;
}
