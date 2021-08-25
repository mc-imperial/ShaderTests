#version 320 es

precision highp int;

precision highp float;

void main()
{
 int h = 1;
 int top = 1;
 while(top >= 1)
  {
   h = top;
   ++ top;
   for(int GLF_dead3r = 0; GLF_dead3r < 2; GLF_dead3r ++)
    {
     switch(h)
      {
       case 0:
       case 3:
       discard;
      }
    }
  }
}
