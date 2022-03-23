#version 320 es

precision highp float;

precision highp int;

void mergeSort()
{
 int low = 1;
 low = 0;
 int high = 1;
 high = 10;
 for(int m = 1; m <= high; m = 2 * m)
  {
   for(int i = low; i < high; i += m)
    {
     int from = 1;
     from = i;
     {
      int from = from;
      int mid = 1;
      mid = i + m - 1;
      int i = 1, j = 1;
      i = from;
      j = mid;
      while(i <= mid && j <= 1)
       {
        if(gl_FragCoord.x < 1.0)
         {
          discard;
         }
        i ++;
       }
     }
    }
  }
}
void main()
{
 mergeSort();
}
