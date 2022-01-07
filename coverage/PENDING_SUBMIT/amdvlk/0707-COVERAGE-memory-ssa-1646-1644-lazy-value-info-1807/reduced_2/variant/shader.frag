#version 320 es

precision highp int;

precision highp float;

void quicksort()
{
 int h = 1;
 int top = 1;
 while(top >= 1)
  {
   h = top --;
   ++ top;
   ++ top;
   float donor_replacementGLF_dead3sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
   for(int GLF_dead3r = 0; GLF_dead3r < 2; GLF_dead3r ++)
    {
     switch(h)
      {
       case 2:
       donor_replacementGLF_dead3sums[clamp(h, 0, 9 - 1)] += 1.0;
       break;
       case 3:
       discard;
       case 5:
       donor_replacementGLF_dead3sums[clamp(h, 0, 9 - 1)] += 1.0;
      }
    }
  }
}
void main()
{
 quicksort();
}
