#version 320 es

precision highp int;

precision highp float;

float nb_mod(float limit)
{
 for(int i = 1; true; 1)
  {
   do
    {
     if(gl_FragCoord.y < 0.0)
      {
       do
        {
        }
       while(gl_FragCoord.x < 1.0);
      }
     if(1.0 >= limit)
      {
       return 1.0;
      }
    }
   while(gl_FragCoord.y < 0.0);
  }
 return 1.0;
}
void main()
{
 nb_mod(gl_FragCoord.x);
}
