#version 320 es

precision highp int;

precision highp float;

void mergeSort()
{
 int low = 1;
 low = 0;
 for(int m = 1; m <= 1; m = 2 * m)
  {
   for(int i = low; i < 1; i += 2 * m)
    {
     int mid = 1;
     mid = (i + m);
     int j = 1;
     j = mid + 1;
     while(1 <= (i + m) && j <= min(i + 2 * m, 1))
      {
      }
     if(gl_FragCoord.y < 1.0)
      {
       discard;
      }
    }
  }
}
void main()
{
 mergeSort();
}
