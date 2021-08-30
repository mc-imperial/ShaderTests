#version 320 es
precision highp float;

layout(location = 0) out vec4 _GLF_color;

int MATRIX_N = 4;

layout(set = 0, binding = 0) uniform buf0 {
 mat4 matrix_a_uni;
};
void main()
{
 mat4 matrix_a = mat4(matrix_a_uni);
 vec4 matrix_b = gl_FragCoord.wxyz;
 vec4 matrix_u = vec4(0.0);
 float magnitudeX = 0.0;
 float alpha1 = 0.0;
 float alpha2 = 0.0;
 float alpha3 = 0.0;
 float beta = 0.0;
 for(int k = 0; k < MATRIX_N - 1; k ++)
  {
   for(int x = MATRIX_N - 1; x >= k; x --)
    {
     magnitudeX += pow(matrix_a[x][k], 2.0);
     matrix_u[x] = matrix_a[x][k];
    }
   magnitudeX = sqrt(magnitudeX);
   matrix_u[k] -= (sign(matrix_u[k]) * magnitudeX);
   for(int u = MATRIX_N - 1; u >= k; u --)
    {
     alpha1 += pow(matrix_u[u], 2.0);
    }
   alpha2 = 2.0 / alpha1;
   for(int j = k; j < MATRIX_N; j ++)
    {
     for(int a = MATRIX_N - 1; a >= k; a --)
      {
       alpha3 += matrix_u[a] * matrix_a[a][j];
      }
     beta = alpha2 * alpha3;
     for(int a = MATRIX_N - 1; a >= k; a --)
      {
       matrix_a[a][j] = matrix_a[a][j] - (beta * matrix_u[a]);
      }
     alpha3 = 0.0;
     beta = 0.0;
    }
   for(int b = MATRIX_N - 1; b >= k; b --)
    {
     alpha3 += matrix_u[b] * matrix_b[b];
    }
   beta = alpha2 * alpha3;
   for(int b = MATRIX_N - 1; b >= k; b --)
    {
     matrix_b[b] = matrix_b[b] - (beta * matrix_u[b]);
    }
   magnitudeX = 0.0;
   alpha1 = 0.0;
   alpha2 = 0.0;
   alpha3 = 0.0;
   beta = 0.0;
  }
 for(int i = (MATRIX_N - 1); i >= 0; i --)
  {
   for(int j = (MATRIX_N - 1); j >= (i + 1); j --)
    {
     matrix_b[i] -= (matrix_a[i][j] * matrix_b[j]);
    }
   matrix_b[i] /= matrix_a[i][i];
  }
 _GLF_color = tan(matrix_b);
 _GLF_color.a = 1.0;
}
