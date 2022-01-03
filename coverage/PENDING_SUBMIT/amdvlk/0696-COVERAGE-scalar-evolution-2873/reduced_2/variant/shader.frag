#version 320 es

precision highp float;

precision highp int;

const int N = 10;

void mergeSort()
{
 int high = 1;
 high = N;
 for(int m = 1; m <= 1; m = 2 * m)
  {
   for(int i = 1; i < high; i += 2 * m)
    {
     int mid = 1;
     mid = i;
     int to = 1;
     to = min(i - 1, high);
     {
      int mid = mid;
      int to = to;
      int j = 1;
      j = mid;
      while(j <= to)
       {
        vec4 GLF_live6matrix_b = vec4(1.0);
        for(int GLF_live6i = 4; GLF_live6i >= 1; GLF_live6i --)
         {
          GLF_live6matrix_b[clamp(GLF_live6i, 0, 4 - 1)] /= 1.0;
         }
       }
     }
    }
  }
}
void main()
{
 mergeSort();
}
