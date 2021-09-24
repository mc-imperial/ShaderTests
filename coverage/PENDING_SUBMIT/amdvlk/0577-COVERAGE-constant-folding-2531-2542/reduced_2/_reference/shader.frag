#version 320 es
precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform buf0 {
 vec2 resolution;
};
void main()
{
 int msb9 = 512;
 int msb10 = 1024;
 int msb14 = 16384;
 int msb15 = 32768;
 int msb19 = 524288;
 int msb20 = 1048576;
 int msb24 = 16777216;
 int msb25 = 33554432;
 int msb29 = 536870912;
 int msb30 = 1073741824;
 uint uselessOutVariable;
 float A[50];
 int i = bitfieldExtract(0, 0, 0);
 do
  {
   if(i >= int(resolution.x))
    {
     break;
    }
   if(findLSB(16) * (i / findMSB(16)) == i)
    {
     A[i / findLSB(16)] = float(i);
    }
   i ++;
  }
 while(i < bitfieldInsert(200, 0, 0, 0));
 i = findLSB(0);
 do
  {
   if(i < int(gl_FragCoord.x))
    {
     break;
    }
   if(i > findMSB(0))
    {
     A[i] += A[int(usubBorrow(uint(i), 1u, uselessOutVariable))];
    }
   i ++;
  }
 while(i < bitfieldInsert(50, 0, 0, 0));
 if(int(gl_FragCoord.x) < findLSB(msb20))
  {
   _GLF_color = vec4(A[bitfieldReverse(0)] / resolution.x, A[findMSB(16)] / resolution.y, 1.0, 1.0);
  }
 else
  if(int(gl_FragCoord.x) < bitfieldInsert(40, 0, 0, 0))
   {
    _GLF_color = vec4(A[findLSB(32)] / resolution.x, A[findMSB(msb9)] / resolution.y, 1.0, 1.0);
   }
  else
   if(int(gl_FragCoord.x) < bitfieldInsert(60, 0, 0, 0))
    {
     _GLF_color = vec4(A[findMSB(msb10)] / resolution.x, A[findLSB(msb14)] / resolution.y, 1.0, 1.0);
    }
   else
    if(int(gl_FragCoord.x) < bitfieldInsert(80, 0, 0, 0))
     {
      _GLF_color = vec4(A[findLSB(msb15)] / resolution.x, A[findMSB(msb19)] / resolution.y, 1.0, 1.0);
     }
    else
     if(int(gl_FragCoord.x) < bitfieldInsert(100, 0, 0, 0))
      {
       _GLF_color = vec4(A[findMSB(msb20)] / resolution.x, A[findLSB(msb24)] / resolution.y, 1.0, 1.0);
      }
     else
      if(int(gl_FragCoord.x) < bitfieldInsert(120, 0, 0, 0))
       {
        _GLF_color = vec4(A[findLSB(msb25)] / resolution.x, A[findMSB(msb29)] / resolution.y, 1.0, 1.0);
       }
      else
       if(int(gl_FragCoord.x) < bitfieldInsert(140, 0, 0, 0))
        {
         _GLF_color = vec4(A[findMSB(msb30)] / resolution.x, A[bitfieldInsert(34, 0, 0, 0)] / resolution.y, 1.0, 1.0);
        }
       else
        if(int(gl_FragCoord.x) < bitfieldInsert(160, 0, 0, 0))
         {
          _GLF_color = vec4(A[bitfieldInsert(35, 0, 0, 0)] / resolution.x, A[bitfieldInsert(39, 0, 0, 0)] / resolution.y, 1.0, 1.0);
         }
        else
         if(int(gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
          {
           _GLF_color = vec4(A[bitfieldInsert(40, 0, 0, 0)] / resolution.x, A[bitfieldInsert(44, 0, 0, 0)] / resolution.y, 1.0, 1.0);
          }
         else
          if(int(gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
           {
            _GLF_color = vec4(A[bitfieldInsert(45, 0, 0, 0)] / resolution.x, A[bitfieldInsert(49, 0, 0, 0)] / resolution.y, 1.0, 1.0);
           }
          else
           {
            discard;
           }
}
