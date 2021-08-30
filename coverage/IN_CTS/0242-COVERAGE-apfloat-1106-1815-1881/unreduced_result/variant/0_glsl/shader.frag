#version 310 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER
precision highp float;

layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

int MATRIX_N = 4;

layout(set = 0, binding = 1) uniform buf1 {
 mat4 matrix_a_uni;
};
struct BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

BST GLF_live0tree[10];

layout(set = 0, binding = 2) uniform buf2 {
 vec2 GLF_live1injectionSwitch;
};
struct Obj {
 float odd_numbers[10];
 float even_numbers[10];
} ;

layout(set = 0, binding = 3) uniform buf3 {
 float GLF_live3time;
};
layout(set = 0, binding = 4) uniform buf4 {
 vec2 GLF_live3resolution;
};
float GLF_live3h_r;

float GLF_live3s_g;

float GLF_live3b_b;

layout(set = 0, binding = 5) uniform buf5 {
 float GLF_live5one;
};
layout(set = 0, binding = 6) uniform buf6 {
 vec2 GLF_live6resolution;
};
layout(set = 0, binding = 7) uniform buf7 {
 vec2 GLF_live8resolution;
};
float GLF_live8compute_value(float GLF_live8limit, float GLF_live8thirty_two)
{
 float GLF_live8result = - 0.5;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-14.13, -7.0, -18.43, -77.56);
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = normalize(vec4(5.8, -7.6, -7.5, -8359.8577));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 {
  int GLF_live8_looplimiter0 = 0;
  for(
      int GLF_live8i = 1;
      GLF_live8i < 800;
      GLF_live8i ++
  )
   {
    if(GLF_live8_looplimiter0 >= 7)
     {
      break;
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-83.16, -959.581, 0.3, -0.0);
     }
    GLF_live8_looplimiter0 ++;
    if((GLF_live8i % 32) == 0)
     {
      GLF_live8result += 0.4;
     }
    else
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(76.25, 0.1, -3412.1184, -7288.9191);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      if(mod(float(GLF_live8i), round(GLF_live8thirty_two)) <= 0.01)
       {
        GLF_live8result += 100.0;
       }
     }
    if(float(GLF_live8i) >= GLF_live8limit)
     {
      return GLF_live8result;
     }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(0.5, -3681.1968, -9871.9942, 14.59);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
 }
 return GLF_live8result;
}
void GLF_live3doConvert()
{
 int GLF_live3msb8 = 256;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = atanh(sin(vec4(-6.9, 5341.8620, -2.3, 7.0)));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = ldexp(fwidth((mat2x4(918.254, 5.6, -6718.7820, 8.2, 2469.5051, -317.456, 4.8, -1.0) * vec2(-8.3, 2.1))), ivec4(25943, 35830, 2600, 85681));
  }
 vec3 GLF_live3temp;
 GLF_live3temp = GLF_live3b_b * (float(bitCount(GLF_live3msb8)) - GLF_live3s_g) + (GLF_live3b_b - GLF_live3b_b * (float(bitCount(GLF_live3msb8)) - GLF_live3s_g)) * clamp(abs(abs(6.0 * (GLF_live3h_r - vec3(bitfieldReverse(0), bitCount(GLF_live3msb8), 2) / 3.0)) - 3.0) - float(bitCount(GLF_live3msb8)), float(bitfieldExtract(int(GLF_live3resolution.x), 0, 0)), float(bitCount(int(GLF_live3resolution.x))));
 GLF_live3h_r = GLF_live3temp.x;
 GLF_live3s_g = GLF_live3temp.y;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(1247.7862, 635.098, 27.27, -541.731);
  }
 GLF_live3b_b = GLF_live3temp.z;
}
vec3 GLF_live3computeColor(float GLF_live3c, vec2 GLF_live3position)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(3296.7245, 846.490, 0.4, -7610.5110);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-6.2, 81.61, -4.7, 1.6);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 int GLF_live3msb8 = 256;
 GLF_live3h_r = fract(GLF_live3c);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(9.4, 1.7, 48.38, -6080.1664);
  }
 GLF_live3s_g = float(bitCount(GLF_live3msb8));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(8.1, 14.17, 6.1, 6875.1804);
  }
 GLF_live3b_b = (0.5 + (sin(GLF_live3time) * 0.5 + 0.5));
 GLF_live3doConvert();
 GLF_live3s_g *= float(bitCount(GLF_live3msb8)) / GLF_live3position.y;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = (-6.9 / vec4(359.926, 4.1, 7.0, -7.4));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      _GLF_color = mat4(9.2, 5572.7679, 72.24, -9.6, 37.03, 1.3, -8431.2301, 62.78, -4.2, -580.567, -9.0, -583.470, 6.1, -4.5, 19.54, 12.95)[0];
     }
   }
 }
 GLF_live3h_r *= float(bitCount(GLF_live3msb8)) / GLF_live3position.x;
 if(abs(GLF_live3position.y - GLF_live3position.x) < 0.5)
  {
   GLF_live3b_b = clamp(float(bitfieldExtract(int(GLF_live3resolution.x), 0, 0)), float(bitCount(GLF_live3msb8)), GLF_live3b_b * float(bitCount(GLF_live3msb8)) * 3.0);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = cosh(vec4(-5.5, 195.452, 1.7, 819.548));
  }
 return vec3(GLF_live3h_r, GLF_live3s_g, GLF_live3b_b);
}
vec3 GLF_live3defaultColor()
{
 return vec3(float(bitfieldExtract(int(GLF_live3resolution.y), 0, 0)));
}
void GLF_live0makeTreeNode(inout BST GLF_live0tree, int GLF_live0data)
{
 GLF_live0tree.data = GLF_live0data;
 GLF_live0tree.leftIndex = - 1;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-203.472, 4.7, 6.6, 0.6);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = intBitsToFloat(ivec4(-4284, -29960, 50701, -43355));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= determinant(mat3(0.0, 1.0, 0.0, 0.0, 0.0, length(vec3(0.0, 0.0, 0.0)), 0.0, 0.0, 0.0))))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 GLF_live0tree.rightIndex = - 1;
}
void GLF_live0insert(int GLF_live0treeIndex, int GLF_live0data)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = clamp(vec4(0.6, 2.3, -2022.9779, 500.203), 73.36, -35.03);
  }
 int GLF_live0baseIndex = 0;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(4571.5781, 8.1, 1.7, 9.6);
  }
 {
  int GLF_live0_looplimiter0 = 0;
  while(GLF_live0baseIndex <= GLF_live0treeIndex)
   {
    if(GLF_live0_looplimiter0 >= 7)
     {
      break;
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-8534.7283, -2.7, -770.627, 38.62);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
           _GLF_color = vec4(65.92, -4.2, 339.058, 4.9);
          }
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         _GLF_color = unpackSnorm4x8((8019u >> 91018u));
        }
      }
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(973.908, -79.59, 52.31, -279.490);
       }
     }
    GLF_live0_looplimiter0 ++;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(8.6, -570.480, 348.221, 1669.5579);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(GLF_live0data <= GLF_live0tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0baseIndex, 10)].data)
     {
      if(GLF_live0tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0baseIndex, 10)].leftIndex == - 1)
       {
        GLF_live0tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0baseIndex, 10)].leftIndex = GLF_live0treeIndex;
        GLF_live0makeTreeNode(GLF_live0tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0treeIndex, 10)], GLF_live0data);
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(45.17, 45.72, 4.3, 4.7);
          }
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(-364.029, 1149.9425, 372.750, -4563.4783);
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = vec4(-5801.0910, -2516.8879, 41.30, -788.727);
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
           if(_GLF_DEAD(false))
            {
             _GLF_color = vec4(-5683.6794, 283.413, -14.00, -54.09);
            }
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        return;
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(7267.5839, 9324.7946, 8260.5062, 16.64);
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
       }
      else
       {
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(-8.4, 5795.5769, 1611.6250, -8.6);
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= length(vec2(0.0, 0.0))))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         _GLF_color = exp2(vec4(16.39, -636.492, 622.609, -55.65));
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(4.3, -7210.3973, -53.85, 447.411);
         if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, bool(bvec2(true, true)))))
          {
           if(_GLF_DEAD(false))
            {
             _GLF_color = vec4(3908.8758, -1.4, 5.8, 8.2);
            }
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = (-61.55 + vec4(-5.2, -9.4, -2.3, 398.489));
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         {
          _GLF_color = vec4(-1.2, -9.1, -1179.0430, -1520.7085);
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(3.9, -6921.2803, 7.9, 0.3);
           }
         }
        GLF_live0baseIndex = GLF_live0tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0baseIndex, 10)].leftIndex;
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = inversesqrt(vec4(88.74, 941.367, 0.7, 61.35));
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(22.06, -1745.0548, -5723.6247, 6.7);
         }
        continue;
       }
     }
    else
     {
      if(GLF_live0tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0baseIndex, 10)].rightIndex == - 1)
       {
        GLF_live0tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0baseIndex, 10)].rightIndex = GLF_live0treeIndex;
        if(_GLF_DEAD(false))
         {
          _GLF_color = ldexp(vec4(-6.6, 793.582, -68.81, -8.9), ivec4(-68806, 74568, 72165, 65918));
         }
        GLF_live0makeTreeNode(GLF_live0tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0treeIndex, 10)], GLF_live0data);
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(95.03, 2328.8382, 2.2, -55.63);
         }
        return;
       }
      else
       {
        GLF_live0baseIndex = GLF_live0tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0baseIndex, 10)].rightIndex;
        continue;
       }
     }
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = exp2(vec4(-7333.5262, -8.5, 485.968, 5.6));
      }
     vec4 _GLF_outVarBackup_GLF_color;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(-42.52, 95.80, -3.2, -2844.4697);
       }
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(85.42, -1515.9622, 9.5, -788.719);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = sign(ldexp(vec4(1.7, -5.0, -5.9, 40.16), ivec4(38308, 94013, 93518, 63665)));
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       _GLF_color = (vec4(-7436.8177, 482.875, -9.4, -550.277) - 2.4);
      }
    }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-602.679, 7864.5313, 59.94, -2.0);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    {
     int GLF_live5c = _GLF_FUZZED((-26009));
     mat2x4 GLF_live5m24 = _GLF_FUZZED(mat2x4(46.30, 8073.5932, 31.48, 6008.8269, 5931.6488, 3779.0942, 9.2, 3.4));
     mat2 GLF_live5m22 = _GLF_FUZZED((mat2(-59.84, 9.9, -7559.6643, -5.4)));
     mat3 GLF_live5m33 = _GLF_FUZZED(mat3(-2107.9250, 9.1, 66.47, -7.0, -25.31, -5.5, -8.3, -3494.1560, -85.53));
     mat4 GLF_live5m44 = _GLF_FUZZED(mat4(2.4, 7662.8708, -4.1, -3.2, 6931.6503, -99.80, -7.4, -494.330, -3796.8654, -2381.6688, -8635.9766, -4606.5314, 519.770, 5406.7899, 8975.2406, 111.380));
     int GLF_live5rows = _GLF_FUZZED(ivec3(36870, 76871, 29441).x);
     mat2x3 GLF_live5m23 = _GLF_FUZZED(mat2x3(mat4x2(mat3x2(851.323, -9393.4360, 5.8, 1.1, -3.9, 3.9))));
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-85.32, 5.7, -81.18, -6.4);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     mat3x4 GLF_live5m34 = _GLF_FUZZED(mat3x4(3.8, -8.6, 8375.1320, -805.186, 435.110, 47.03, -34.09, 50.36, 2.7, -6.1, 8.7, -3028.1104));
     mat4x2 GLF_live5m42 = _GLF_FUZZED(mat4x2(9451.1641, -9961.8949, -6.8, -3609.0696, 5.4, 8583.4661, 8.4, 982.053));
     mat3x2 GLF_live5m32 = _GLF_FUZZED(mat3x2(798.847, 1.3, -25.49, 1609.9405, 990.624, 202.886));
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(73.48, -1.4, -1625.0238, -8.4);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(33.03, -2693.9723, -2008.5060, 3.5);
       }
     }
     mat4x3 GLF_live5m43 = _GLF_FUZZED(mat4x3(-2108.2851, -137.007, 8.8, 1258.4934, -4986.6415, -351.267, 7.1, -90.26, -525.785, -39.72, -8.1, 5.0));
     int GLF_live5_looplimiter0 = 0;
     uint GLF_live5matrix_number = _GLF_FUZZED((66230u + (false ? 143389u : 163489u)));
     for(
         int GLF_live5r = 0;
         GLF_live5r < GLF_live5rows;
         GLF_live5r ++
     )
      {
       if(GLF_live5_looplimiter0 >= 7)
        {
         break;
        }
       GLF_live5_looplimiter0 ++;
       switch(GLF_live5matrix_number)
        {
         case 0u:
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(7.8, -0.8, 61.54, 2058.9971);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         GLF_live5m22[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 2)] = GLF_live5one;
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = vec4(56.01, 5.0, 7465.9915, 3488.6276);
          }
         break;
         case 1u:
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(70.84, 8.0, -8.6, -0.4);
          }
         GLF_live5m23[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 3)] = GLF_live5one;
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = mat2x4(-1.4, -3.6, -3.6, 8.3, -8006.5391, 7893.7942, 3634.8091, 2391.4222)[1];
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         break;
         case 2u:
         GLF_live5m24[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 4)] = GLF_live5one;
         break;
         case 3u:
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = vec4(7.8, 90.24, 6.7, -5.8);
          }
         GLF_live5m32[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 2)] = GLF_live5one;
         break;
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = (-6662.7482 * vec4(3.8, -4.9, 8.3, 552.319));
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         case 4u:
         GLF_live5m33[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 3)] = GLF_live5one;
         break;
         case 5u:
         GLF_live5m34[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 4)] = GLF_live5one;
         break;
         case 6u:
         GLF_live5m42[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 2)] = GLF_live5one;
         break;
         case 7u:
         GLF_live5m43[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 3)] = GLF_live5one;
         break;
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-5.5, smoothstep(2.5, atan(8.5, 5560.1366), vec2(-596.749, 213.125)), -248.000);
          }
         case 8u:
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
           {
            _GLF_color = mat3x4(degrees(3.2), 8363.1926, -764.637, 8.6, -5.0, 861.217, 1.6, -32.68, 6.1, 3.3, 981.399, -713.239)[0];
           }
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          if(_GLF_DEAD(false))
           {
            _GLF_color = cosh(dFdy(vec4(9.5, 8109.4190, 2.6, -942.383)));
           }
          _GLF_color = vec4(-5.0, -211.372, 44.74, -1.4);
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         GLF_live5m44[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 4)] = GLF_live5one;
         break;
        }
      }
    }
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = log(vec4(-90.80, -8.7, -4.5, -70.92));
     }
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = mod(vec4(-45.89, -3625.0545, -9.5, 2.1), intBitsToFloat(ivec4(54843, 6405, -69312, -86903)));
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   if(_GLF_DEAD(false))
    {
     _GLF_color = cos(vec4(-885.920, -41.56, 13.95, 3.4));
    }
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(451.869, -72.23, -5.2, 623.278);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-51.25, -3340.2669, 7.3, -49.07);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
 }
}
int GLF_live0search(int GLF_live0target)
{
 BST GLF_live0currentNode;
 int GLF_live0index = 0;
 {
  int GLF_live0_looplimiter1 = 0;
  while(GLF_live0index != - 1)
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = (-281.294 * roundEven(vec4(-981.211, 3.1, 7.4, 81.10)));
     }
    if(GLF_live0_looplimiter1 >= 7)
     {
      {
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         {
          _GLF_color = tanh(vec4(17.72, -15.14, 94.24, -4.5));
         }
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = inversesqrt(vec4(-815.246, 7.9, 6.8, 23.36));
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(4177.0416, -768.716, 37.08, -149.403);
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       if(_GLF_DEAD(false))
        {
         _GLF_color = acos(vec4(6.3, 385.579, -6915.6009, -461.988));
        }
       _GLF_color = vec4(53.82, -408.825, -2.9, 2.3);
       {
        int GLF_live1b = _GLF_FUZZED(ivec4(87615, 84745, 88899, -45967).p);
        int GLF_live1a = _GLF_FUZZED(9130);
        vec2 GLF_live1uv = _GLF_FUZZED(vec2(2.8, -8203.9929));
        int GLF_live1_looplimiter3 = 0;
        int GLF_live1d = _GLF_FUZZED(-21171);
        int GLF_live1c = _GLF_FUZZED(27818);
        {
         if(GLF_live1_looplimiter3 >= 3)
          {
           1;
          }
         GLF_live1_looplimiter3 ++;
         GLF_live1uv.y -= step(GLF_live1injectionSwitch.y, GLF_live1uv.x) + float(GLF_live1a) + float(GLF_live1b) + float(GLF_live1c);
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = mix(vec4(6.6, -77.03, -393.604, 8456.7150), vec4(1630.9952, -33.35, -5214.5040, 428.533), bvec4(true, false, true, false));
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         GLF_live1d --;
        }
       }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = sign(mat3x4(-4.8, 69.31, -4.4, -1594.9307, -279.275, -8933.2468, -3779.7827, -1825.2397, 1.8, 361.644, -5.1, 802.035)[0]);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(910.617, -449.845, -2.9, -1.9);
        }
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      break;
     }
    GLF_live0_looplimiter1 ++;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
      {
       _GLF_color = (vec4(-485.607, 38.77, -6795.2940, 315.321) + -8.1);
      }
     _GLF_outVarBackup_GLF_color = _GLF_color;
     {
      int GLF_live6i = _GLF_FUZZED(-95369);
      if(GLF_live6i >= int(GLF_live6resolution.x))
       {
        1;
       }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-64.74, -1.0, 4.3, -59.22);
        }
       _GLF_color = vec4(-80.19, -381.731, -6795.0168, -338.975);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= determinant(mat3(0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0))))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
     }
     _GLF_color = reflect(vec4(60.88, -0.2, 5.2, -9.2), sign(vec4(-2425.8037, 484.776, -8.0, 38.41)));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    GLF_live0currentNode = GLF_live0tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0index, 10)];
    if(GLF_live0currentNode.data == GLF_live0target)
     {
      return GLF_live0target;
     }
    {
     int GLF_live2i = _GLF_FUZZED(14250);
     Obj GLF_live2obj;
     int GLF_live2index = _GLF_FUZZED(-80492);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < determinant(mat2(0.0, 0.0, sqrt(1.0), 0.0))))))
      {
       _GLF_color = vec4(vec3(-709.430, -8.6, -5.2), 8.9);
      }
     {
      int GLF_live2_looplimiter2 = 0;
      for(
          int GLF_live2j = GLF_live2i + 1;
          GLF_live2j < 10;
          GLF_live2j ++
      )
       {
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(-65.54, 9689.4223, -787.230, 4.4);
         if(_GLF_DEAD(false))
          {
           _GLF_color = normalize(vec4(-2.6, 6089.6166, 7.8, 967.376));
          }
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        if(GLF_live2_looplimiter2 >= 7)
         {
          break;
         }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           _GLF_color = exp(vec4(7.0, -7.9, -49.35, 5680.3338));
          }
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(3.3, -7600.7735, -7794.6770, 4.7);
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        GLF_live2_looplimiter2 ++;
        if(GLF_live2obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2j, 10)] < GLF_live2obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2index, 10)])
         {
          GLF_live2index = GLF_live2j;
         }
       }
     }
    }
    GLF_live0index = GLF_live0target > GLF_live0currentNode.data ? GLF_live0currentNode.rightIndex : GLF_live0currentNode.leftIndex;
   }
 }
 return - 1;
}
void main()
{
 mat4 matrix_a = mat4(matrix_a_uni);
 vec4 matrix_b = gl_FragCoord.wxyz;
 vec4 matrix_u = vec4(0.0);
 float magnitudeX = 0.0;
 float alpha1 = 0.0;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(61.79, 9.1, -5.3, -612.787);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-7401.9781, -6.4, -931.064, -7504.6885);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_DEAD(false))
     {
      if(_GLF_DEAD(false))
       {
        _GLF_color = asin(vec4(-9.5, -8031.1571, 1.2, -3.1));
       }
      _GLF_color = (vec4(5.5, -57.59, 88.75, -9.7) / vec4(-945.130, -3.0, 505.520, -66.64));
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-748.181, 5.5, 800.570, 2753.0332);
     }
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = mod(vec4(1.1, 7.6, -824.458, -9.7), vec4(-5396.1947, -34.17, 7.4, -6.4));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   _GLF_color = vec4(-6.1, 46.20, 1.9, 6.5);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-698.067, -5108.2505, 6.6, -250.383);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(sign(vec3(80.43, 7.0, 39.02).rb), vec2(-8228.9759, -760.849));
   }
 }
 float alpha2 = 0.0;
 float alpha3 = 0.0;
 float beta = 0.0;
 for(
     int k = 0;
     k < MATRIX_N - 1;
     k ++
 )
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-40.93, 8.6, -7762.9486, 3.2);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(9012.0399, -0.9, -50.66, 80.09);
      }
    }
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(7.1, 731.243, 26.02, -7.8);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   for(
       int x = MATRIX_N - 1;
       x >= k;
       x --
   )
    {
     {
      vec4 GLF_live0_GLF_color = _GLF_FUZZED((vec4(6016.2896, -4573.0102, -7.0, 4.8) / -352.322));
      BST GLF_live0tree[10];
      {
       vec4 _GLF_outVarBackup_GLF_color;
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         _GLF_color = vec4(-1.4, -5.5, -539.234, -6779.9438);
        }
       _GLF_outVarBackup_GLF_color = _GLF_color;
       if(_GLF_DEAD(false))
        {
         _GLF_color = radians(mat3x4(6.1, 3122.2531, -1.8, 9.7, -7585.6638, 7.3, -7.0, 934.816, 1.1, -7624.9435, 9.7, -14.48)[0]);
        }
       _GLF_color = vec4(8.8, -7.3, -1460.6546, 4.9);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
        {
         {
          float GLF_live7ref = _GLF_FUZZED(float(35172u));
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = vec4(966.703, 653.608, 5661.7230, -98.03);
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
          int GLF_live7i = _GLF_FUZZED(48387);
          int GLF_live7_looplimiter0 = 0;
          float GLF_live7limit = _GLF_FUZZED(9389.5411);
          float GLF_live7s = _GLF_FUZZED((159.810 / -0.8));
          while(GLF_live7i < bitfieldInsert(800, GLF_live7i, 0, 0))
           {
            if(GLF_live7_looplimiter0 >= 4)
             {
              {
               vec4 _GLF_outVarBackup_GLF_color;
               _GLF_outVarBackup_GLF_color = _GLF_color;
               _GLF_color = vec4(948.178, -94.59, 170.537, 4.1);
               if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
                {
                 _GLF_color = vec4(961.159, -2111.3016, 0.9, -2651.0299);
                }
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 _GLF_color = _GLF_outVarBackup_GLF_color;
                }
              }
              break;
             }
            GLF_live7_looplimiter0 ++;
            if(mod(float(GLF_live7i), GLF_live7ref) <= 0.01)
             {
              GLF_live7s += 0.2;
             }
            if(float(GLF_live7i) >= GLF_live7limit)
             {
              GLF_live7s;
             }
            GLF_live7i ++;
           }
         }
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      {
       int GLF_live0treeIndex = 0;
       GLF_live0makeTreeNode(GLF_live0tree[0], 9);
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(59.49, -2.7, -9165.4696, -8.1);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       GLF_live0treeIndex ++;
       GLF_live0insert(GLF_live0treeIndex, 5);
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-520.278, -5.1, -9.0, 70.02);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       GLF_live0treeIndex ++;
       GLF_live0insert(GLF_live0treeIndex, 12);
       GLF_live0treeIndex ++;
       GLF_live0insert(GLF_live0treeIndex, 15);
       GLF_live0treeIndex ++;
       GLF_live0insert(GLF_live0treeIndex, 7);
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(4.0, 859.878, 63.70, 87.36);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
        {
         mediump vec4 GLF_live8gl_FragCoord = _GLF_FUZZED(vec4(445.171, -6.6, vec2(-85.36, 8.2)));
         vec4 GLF_live8_GLF_color = _GLF_FUZZED((- vec4(-4557.8371, 788.456, -1.6, -61.04)));
         {
          vec3 GLF_live8c = vec3(7.0, 8.0, 9.0);
          float GLF_live8thirty_two = round(GLF_live8resolution.x / 8.0);
          GLF_live8c.x = GLF_live8compute_value(GLF_live8gl_FragCoord.x, GLF_live8thirty_two);
          GLF_live8c.y = GLF_live8compute_value(GLF_live8gl_FragCoord.y, GLF_live8thirty_two);
          GLF_live8c.z = GLF_live8c.x + GLF_live8c.y;
          {
           int GLF_live8_looplimiter1 = 0;
           for(
               int GLF_live8i = 0;
               GLF_live8i < 3;
               GLF_live8i ++
           )
            {
             if(_GLF_DEAD(false))
              {
               _GLF_color = vec4(-43.03, 801.995, -93.88, -971.032);
              }
             if(GLF_live8_looplimiter1 >= 7)
              {
               break;
              }
             if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
              {
               _GLF_color = (vec4(-46.41, 1.8, -8859.0469, -6.1) + vec4(-8542.1812, -24.24, 2577.7855, 7.7));
              }
             GLF_live8_looplimiter1 ++;
             if(GLF_live8c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live8i, 3)] >= 1.0)
              {
               GLF_live8c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live8i, 3)] = GLF_live8c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live8i, 3)] * GLF_live8c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live8i, 3)];
              }
            }
          }
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = vec3(-8.5, 55.58, 555.870).spts;
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
             if(_GLF_DEAD(false))
              {
               _GLF_color = vec4(-8615.5806, -4.4, -9.4, -9.5);
              }
            }
          }
          if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
           {
            _GLF_color = tanh(vec4(-8.6, 8979.4749, -455.415, 6541.9150));
           }
          GLF_live8_GLF_color = vec4(normalize(abs(GLF_live8c)), 1.0);
         }
        }
       }
       GLF_live0treeIndex ++;
       GLF_live0insert(GLF_live0treeIndex, 8);
       GLF_live0treeIndex ++;
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-39.45, -3012.1779, 667.611, 873.160);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = sin(vec4(9673.4699, 15.00, -821.644, -121.285));
         if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, false || (true))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
       }
       GLF_live0insert(GLF_live0treeIndex, 2);
       GLF_live0treeIndex ++;
       GLF_live0insert(GLF_live0treeIndex, 6);
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = vec4(3.6, 197.172, 267.702, -7.2);
        }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         {
          _GLF_color = vec4(8942.2369, 6.7, -2.0, -7.4);
         }
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(922.583, 2.0, 1.8, -643.336);
         }
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(179.015, 3.0, 5.2, -71.61);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), ! (! (_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))) && true))))))
        {
         _GLF_color = vec4(-2.7, 4655.6702, -4.1, -8.3);
        }
       GLF_live0treeIndex ++;
       GLF_live0insert(GLF_live0treeIndex, 17);
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(-449.971, -435.085, -287.171, 7164.9346);
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        _GLF_color = atanh(vec4(-4.0, -8305.4854, 3.1, -74.52));
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         _GLF_color = vec4(-7607.9997, 9248.9335, 281.082, 5597.5181);
        }
       GLF_live0treeIndex ++;
       if(_GLF_DEAD(false))
        {
         _GLF_color = dFdy(vec4(17.21, 8.6, -677.929, 898.593));
        }
       GLF_live0insert(GLF_live0treeIndex, 13);
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = (852.155 - reflect(vec4(-94.74, -155.163, -7756.4930, -514.927), vec4(-5.7, -64.76, -6.2, 628.098)));
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       int GLF_live0count = 0;
       {
        int GLF_live0_looplimiter2 = 0;
        for(
            int GLF_live0i = 0;
            GLF_live0i < 20;
            GLF_live0i ++
        )
         {
          if(GLF_live0_looplimiter2 >= 7)
           {
            break;
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = cosh(vec4(0.0, -9.3, -70.28, 2872.3820));
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
           }
          GLF_live0_looplimiter2 ++;
          {
           vec4 _GLF_outVarBackup_GLF_color;
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = uintBitsToFloat(uvec4(16477u, 144373u, 54257u, 102545u));
            if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = vec4(-5123.2778, -40.95, 0.9, 788.044);
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
             _GLF_color = vec4(62.27, -6.8, 789.664, -29.25);
            }
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= length(0.0)))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
             _GLF_color = vec4(vec3(-4.3, -2.6, -339.481), 34.57);
            }
           if(_GLF_DEAD(false))
            {
             _GLF_color = vec4(566.356, -7259.4799, 776.435, 5.3);
            }
          }
          int GLF_live0result = GLF_live0search(GLF_live0i);
          {
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            if(_GLF_DEAD(false))
             {
              _GLF_color = abs(sin(vec4(-87.39, 5.7, 4959.6198, -1.3)));
             }
            _GLF_color = (82.49 - vec4(-525.114, -8.3, 212.545, 5.3));
            if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = vec4(268.159, 6.7, -541.627, -0.8);
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = vec4(89.48, -40.93, 188.389, 6262.4095);
            if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
          }
          switch(GLF_live0i)
           {
            case 9:
            case 5:
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = dFdy(radians(vec4(-9.9, -4.3, -21.26, -2.1)));
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = vec4(6.7, -9552.7510, -3194.6307, 4.8);
              if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
              if(_GLF_DEAD(false))
               {
                _GLF_color = ((vec4(-47.12, -2.2, -58.18, -2.9) + vec4(8.3, 85.00, 0.4, -1642.2535)) * (min(vec4(8.5, 0.4, 8.9, 0.4), vec4(4.4, -4.0, -7093.2360, -4913.2110)) / -7325.7127));
               }
             }
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                {
                 _GLF_color = vec4(-2596.4013, 714.255, 83.89, 456.368);
                }
               _GLF_color = vec4(8.4, 280.270, -1.3, 89.57);
              }
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = vec4(1.1, -6037.0904, 21.38, 9413.2219);
              if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
              if(_GLF_DEAD(false))
               {
                _GLF_color = vec4(-2.3, 6476.4137, -0.7, 807.111);
               }
             }
             _GLF_color = vec4(-53.47, -85.32, -0.5, -6.9);
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = (vec3(22.16, 84.17, 3.5) * (mat4x3(-2640.2490, 56.41, 657.752, 17.39, -2.8, 55.77, 8.3, -0.5, 1913.2091, 6501.9832, 8361.9178, -9124.1936) + 7863.9638));
              if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= log(_GLF_ONE(1.0, injectionSwitch.y))))))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
            case 12:
            case 15:
            {
             vec3 GLF_live3setting = _GLF_FUZZED(vec3(47.86, 327.673, 7.4));
             int GLF_live3msb8 = _GLF_FUZZED(-10045);
             vec2 GLF_live3pos = _GLF_FUZZED(vec4(9450.8109, -0.2, -6.3, 855.616).zy);
             {
              if(_GLF_DEAD(false))
               {
                _GLF_color = unpackUnorm4x8((127909u / 159960u));
               }
              GLF_live3computeColor(GLF_live3setting.z / (5.0 * float(findMSB(GLF_live3msb8))), GLF_live3pos);
             }
            }
            if(_GLF_DEAD(false))
             {
              _GLF_color = vec4(7.5, -7592.0661, -72.63, 7272.3894);
             }
            case 7:
            case 8:
            case 2:
            {
             if(_GLF_DEAD(false))
              {
               _GLF_color = vec4(4246.0147, 40.04, -162.685, 1.4);
              }
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = vec4(-246.846, -804.311, -0.1, 7281.6375);
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = vec4(-81.09, -9965.8635, -34.77, -8.7);
              if(_GLF_WRAPPED_IF_TRUE(true))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
            if(_GLF_DEAD(false))
             {
              _GLF_color = vec4(-8.8, -5944.6665, vec2(9.7, 89.03));
             }
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = pow(vec4(-5.2, -9636.9320, 912.773, -3549.6490), vec4(vec2(5.5, -3095.3197), -90.08, -7112.7160));
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                {
                 {
                  int GLF_live6_looplimiter1 = 0;
                  mediump vec4 GLF_live6gl_FragCoord = _GLF_FUZZED(vec4(-9.7, 8220.6111, 56.19, -93.83));
                  float GLF_live6A[50];
                  for(
                      int GLF_live6i = 0;
                      GLF_live6i < 50;
                      GLF_live6i ++
                  )
                   {
                    if(GLF_live6_looplimiter1 >= 7)
                     {
                      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                       {
                        _GLF_color = vec4(-48.01, -98.57, -8434.4755, 91.08);
                       }
                      break;
                     }
                    GLF_live6_looplimiter1 ++;
                    if(GLF_live6i < int(GLF_live6gl_FragCoord.x))
                     {
                      break;
                     }
                    if(GLF_live6i > 0)
                     {
                      GLF_live6A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6i, 50)] += GLF_live6A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6i - 1, 50)];
                     }
                   }
                 }
                 _GLF_color = smoothstep(vec4(-77.69, 182.337, -9.5, -1.6), vec4(4.4, 7.4, 364.413, -99.47), vec4(-2.7, -236.719, -97.49, 97.92));
                }
              }
            }
            case 6:
            case 17:
            case 13:
            if(GLF_live0result == GLF_live0i)
             {
              GLF_live0count ++;
             }
            break;
            default:
            if(GLF_live0result == - 1)
             {
              GLF_live0count ++;
             }
            break;
           }
         }
       }
       if(GLF_live0count == 20)
        {
         {
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(-3.5, -256.038, -1.4, 8.2);
           }
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = roundEven(vec4(2.1, 0.8, 0.9, -7.7));
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
          _GLF_color = vec4(2126.1421, -8.6, -8533.0266, 9495.5404);
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
           {
            if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
             {
              if(_GLF_DEAD(false))
               {
                _GLF_color = vec4(-1.5, 6403.3684, 30.94, 4464.4371);
               }
              _GLF_color = vec4(-358.922, 91.63, 2953.4209, -52.41);
             }
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         GLF_live0_GLF_color = vec4(1.0, 0.0, 0.0, 1.0);
        }
       else
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = refract(vec4(-3.9, -11.51, -9.8, 53.88), (5.3 - vec4(59.73, 0.1, 77.65, -2077.1395)), cosh(1481.0172));
          }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(-89.20, 92.85, 384.891, -34.17);
           }
          _GLF_color = vec4(-120.028, -1.0, -49.91, -481.105);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         GLF_live0_GLF_color = vec4(0.0, 0.0, 1.0, 1.0);
        }
      }
     }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-3.9, vec3(-34.02, -6.5, 8559.8981)).ywwy;
      }
     magnitudeX += pow(matrix_a[x][k], 2.0);
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-23.83, -792.843, 62.18, 343.440);
      }
     matrix_u[x] = matrix_a[x][k];
    }
   magnitudeX = sqrt(magnitudeX);
   matrix_u[k] -= (sign(matrix_u[k]) * magnitudeX);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(9227.6217, -49.64, 4.4, -2.9);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   for(
       int u = MATRIX_N - 1;
       u >= k;
       u --
   )
    {
     alpha1 += pow(matrix_u[u], 2.0);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = atan(vec4(-696.966, -4.7, 17.84, 3818.2523));
      }
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = tan(vec4(0.8, -58.68, 56.86, -4398.8805));
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(7.3, 8006.4686, 5828.8722, 3.5);
     }
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = step(trunc(vec4(-5.5, -574.747, -9.3, 9288.0895)), vec4(-5.6, -2787.2056, -7.0, -268.652));
    }
   alpha2 = 2.0 / alpha1;
   for(
       int j = k;
       j < MATRIX_N;
       j ++
   )
    {
     for(
         int a = MATRIX_N - 1;
         a >= k;
         a --
     )
      {
       alpha3 += matrix_u[a] * matrix_a[a][j];
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = ldexp(vec4(-124.367, 385.193, 57.98, 2.3), ivec4(73678, 17747, -51526, 53058));
      }
     beta = alpha2 * alpha3;
     for(
         int a = MATRIX_N - 1;
         a >= k;
         a --
     )
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-9.5, 67.59, 69.14, -602.266);
        }
       matrix_a[a][j] = matrix_a[a][j] - (beta * matrix_u[a]);
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         {
          _GLF_color = vec4(260.504, 3737.1626, 435.788, 949.755);
         }
        vec4 _GLF_outVarBackup_GLF_color;
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         {
          _GLF_color = vec4(990.477, 5603.7055, 4839.2595, -0.0);
         }
        {
         {
          vec4 GLF_live4c = _GLF_FUZZED((vec4(634.255, -70.25, 5914.3461, 53.63) / vec4(-57.16, -74.56, -3.5, -77.73)));
          {
           int GLF_live4_looplimiter1 = 0;
           for(
               int GLF_live4i = 0;
               GLF_live4i < 3;
               GLF_live4i ++
           )
            {
             if(GLF_live4_looplimiter1 >= 7)
              {
               break;
              }
             {
              float GLF_live6A[50];
              {
               int GLF_live6_looplimiter0 = 0;
               for(
                   int GLF_live6i = 0;
                   GLF_live6i < 200;
                   GLF_live6i ++
               )
                {
                 if(GLF_live6_looplimiter0 >= 7)
                  {
                   break;
                  }
                 {
                  vec4 _GLF_outVarBackup_GLF_color;
                  _GLF_outVarBackup_GLF_color = _GLF_color;
                  _GLF_color = vec4(-2.1, -8.9, 6.9, -2522.2023);
                  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                   {
                    _GLF_color = _GLF_outVarBackup_GLF_color;
                   }
                 }
                 GLF_live6_looplimiter0 ++;
                 if(GLF_live6i >= int(GLF_live6resolution.x))
                  {
                   {
                    if(_GLF_DEAD(false))
                     {
                      _GLF_color = vec4(1.1, -28.16, -474.432, 8860.3754);
                     }
                    vec4 _GLF_outVarBackup_GLF_color;
                    _GLF_outVarBackup_GLF_color = _GLF_color;
                    _GLF_color = vec4(1.2, 338.547, -5485.6553, -62.04);
                    if(_GLF_DEAD(false))
                     {
                      _GLF_color = vec4(2424.7978, 908.380, 7.8, 4.6);
                     }
                    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                     {
                      _GLF_color = _GLF_outVarBackup_GLF_color;
                     }
                   }
                   break;
                  }
                 if((4 * (GLF_live6i / 4)) == GLF_live6i)
                  {
                   GLF_live6A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6i / 4, 50)] = float(GLF_live6i);
                  }
                }
              }
             }
             if(_GLF_DEAD(false))
              {
               _GLF_color = vec4(0.5, -498.600, -8.9, 400.393).qqpt;
              }
             GLF_live4_looplimiter1 ++;
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))
              {
               _GLF_color = normalize(vec4(7331.5355, 16.30, 145.447, 896.037));
              }
             if(GLF_live4c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live4i, 4)] >= 1.0)
              {
               GLF_live4c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live4i, 4)] = GLF_live4c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live4i, 4)] * GLF_live4c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live4i, 4)];
              }
            }
          }
         }
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(759.974, 669.449, -2.6, -38.29);
          }
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = abs(vec4(8698.2777, -2973.7128, -4.5, 2958.7163));
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= tan(sqrt(0.0))))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        _GLF_outVarBackup_GLF_color = _GLF_color;
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(9.1, vec2(9.2, 5571.6061), 7062.7657);
         }
        _GLF_color = vec4(3.4, -1.8, 5.2, -90.09);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(571.257, 0.7, 6.5, 5.9);
         }
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(32.45, -3.6, 71.01, -3.3);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        {
         {
          mediump vec4 GLF_live6gl_FragCoord = _GLF_FUZZED(((mat2x4(-55.99, 329.609, 6.7, -6770.7412, -396.737, -51.36, 94.40, 0.3)) * (vec4(4.2, 9.8, -5.4, -26.89).ra * 5641.1857)));
          float GLF_live6A[50];
          {
           int GLF_live6_looplimiter1 = 0;
           if(_GLF_DEAD(false))
            {
             _GLF_color = vec4(-7.5, -9.5, 3823.2092, -2.7);
            }
           for(
               int GLF_live6i = 0;
               GLF_live6i < 50;
               GLF_live6i ++
           )
            {
             if(GLF_live6_looplimiter1 >= 7)
              {
               break;
              }
             GLF_live6_looplimiter1 ++;
             if(GLF_live6i < int(GLF_live6gl_FragCoord.x))
              {
               break;
              }
             if(GLF_live6i > 0)
              {
               if(_GLF_DEAD(false))
                {
                 _GLF_color = (- vec4(8.1, 275.741, 944.150, 4067.8542));
                }
               GLF_live6A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6i, 50)] += GLF_live6A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6i - 1, 50)];
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              {
               _GLF_color = vec4(-64.56, 31.52, 9.8, 918.156);
              }
            }
          }
         }
         float GLF_live4s = _GLF_FUZZED(-6707.7365);
         {
          GLF_live4s;
         }
        }
        _GLF_color = vec4(-78.15, -5750.2780, 929.138, -0.7);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
     {
      {
       GLF_live3defaultColor();
      }
     }
     alpha3 = 0.0;
     beta = 0.0;
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = tan(vec4(-4630.5981, -8.7, 4.9, -6167.1934));
    }
   for(
       int b = MATRIX_N - 1;
       b >= k;
       b --
   )
    {
     alpha3 += matrix_u[b] * matrix_b[b];
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-5.7, 2081.4516, 62.96, 0.3);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      _GLF_color = vec4(-35.20, -0.1, 12.83, -65.55);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= _GLF_IDENTITY(dot(vec2(1.0, 1.0), vec2(0.0, 0.0)), _GLF_IDENTITY(dot(vec2(1.0, 1.0), vec2(0.0, 0.0)), mix(float(_GLF_FUZZED(-27.20)), float(dot(vec2(1.0, 1.0), vec2(0.0, 0.0))), bool(true))))))))
       {
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(-8892.8372, -3.7, -153.098, 98.06);
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
   beta = alpha2 * alpha3;
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     {
      int GLF_live2_looplimiter0 = 0;
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(146.543, -385.822, 2.6, 306.764);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      if(GLF_live2_looplimiter0 >= 7)
       {
        1;
       }
     }
     {
      int GLF_live6_looplimiter0 = 0;
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
        _GLF_color = vec3(2.4, 9846.1325, -7.1).yzxy;
       }
      float GLF_live6A[50];
      for(
          int GLF_live6i = 0;
          GLF_live6i < 200;
          GLF_live6i ++
      )
       {
        if(GLF_live6_looplimiter0 >= 7)
         {
          break;
         }
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         {
          _GLF_color = clamp(vec4(1.0, -6.5, 4.3, 73.43), vec4(-1955.4837, -48.18, -60.55, -1926.3128), vec4(17.31, 0.7, -4.5, 9497.9879));
         }
        GLF_live6_looplimiter0 ++;
        if(GLF_live6i >= int(GLF_live6resolution.x))
         {
          break;
         }
        if((4 * (GLF_live6i / 4)) == GLF_live6i)
         {
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = vec4(38.77, -864.481, 7.1, -13.72);
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
           {
            _GLF_color = step(vec4(98.20, -241.748, -246.320, -0.6), vec4(-2739.4595, 978.771, -8.8, -4.8));
           }
          GLF_live6A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6i / 4, 50)] = float(GLF_live6i);
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
           {
            _GLF_color = vec4(0.7, -580.482, -6.8, 47.20);
           }
         }
       }
     }
     _GLF_color = vec4(2.4, 398.280, -35.64, -1576.1109);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    _GLF_color = vec4(2.8, 167.173, -0.6, -1239.7755);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    {
     {
      int GLF_live6_looplimiter0 = 0;
      float GLF_live6A[50];
      for(
          int GLF_live6i = 0;
          GLF_live6i < 200;
          GLF_live6i ++
      )
       {
        if(GLF_live6_looplimiter0 >= 7)
         {
          break;
         }
        GLF_live6_looplimiter0 ++;
        if(GLF_live6i >= int(GLF_live6resolution.x))
         {
          break;
         }
        if((4 * (GLF_live6i / 4)) == GLF_live6i)
         {
          GLF_live6A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6i / 4, 50)] = float(GLF_live6i);
         }
       }
     }
     vec4 _GLF_outVarBackup_GLF_color;
     {
      float GLF_live7ref = _GLF_FUZZED((- 0.0));
      int GLF_live7i = _GLF_FUZZED(ivec2(70444, -59710).y);
      int GLF_live7_looplimiter0 = 0;
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = (-7.9 - vec4(-45.79, 53.48, 369.483, -970.562));
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(2.9, 0.8, -2.7, -386.047);
        }
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      float GLF_live7limit = _GLF_FUZZED(float(false));
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-26.21, 42.34, -5.5, 74.04);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      float GLF_live7s = _GLF_FUZZED(6882.3600);
      {
       if(GLF_live7_looplimiter0 >= 4)
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = cosh(vec4(-92.53, -4.4, -3299.6576, 7.3));
          }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = (false ? vec4(-6.2, 4.5, -83.04, -977.246) : vec4(94.62, -283.998, 47.65, 47.88));
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         1;
        }
       GLF_live7_looplimiter0 ++;
       if(mod(float(GLF_live7i), GLF_live7ref) <= 0.01)
        {
         GLF_live7s += 0.2;
        }
       if(float(GLF_live7i) >= GLF_live7limit)
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = mod(min(vec4(-8.5, 100.391, -3.0, 0.7), vec4(-3.3, -692.349, -6685.1671, -7.1)), 24.58);
          }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(-7.6, -798.880, -0.5, 6.0);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         GLF_live7s;
        }
       GLF_live7i ++;
      }
     }
     if(_GLF_DEAD(false))
      {
       _GLF_color = (+ vec4(12.16, -3.0, -4864.3452, 26.52));
      }
     _GLF_outVarBackup_GLF_color = _GLF_color;
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-78.24, 7816.0990, -454.645, 57.59);
      }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = mix(vec4(-678.462, 1.1, 106.522, 17.26), vec4(-4934.6931, 8719.6741, 989.790, 17.52), vec4(589.983, 1184.8445, -5358.9869, 9341.4143));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_color = (inversesqrt(vec2(vec3(692.277, 5562.1036, 85.74))) * (-2515.8595 - mat4x2(488.249, 0.4, -26.51, 3694.2306, -6.8, 4.6, -579.503, -9172.5352)));
     if(_GLF_DEAD(false))
      {
       _GLF_color = min(vec4(-3332.1571, 7.3, -8.3, -2.7), mod(vec4(7.5, 775.167, -3547.4067, 8639.2117), 6.5));
      }
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       if(_GLF_DEAD(_GLF_IDENTITY(false, (_GLF_IDENTITY(false, ! (! (false)))) || false)))
        {
         _GLF_color = vec4(-7.4, 932.295, 8.4, 927.441);
        }
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
   for(
       int b = MATRIX_N - 1;
       b >= k;
       b --
   )
    {
     matrix_b[b] = matrix_b[b] - (beta * matrix_u[b]);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = (vec4(33.97, -2805.9412, -8156.8196, -1.3) + vec4(-13.82, -1.4, -8721.5398, -8367.0981));
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = step(-836.491, vec4(62.01, -1395.8846, 2.5, 598.380));
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(0.6, -3.1, 325.239, 38.97);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
   {
    float GLF_live4s = _GLF_FUZZED((+ -3956.8493));
    {
     GLF_live4s;
     {
      float GLF_live8thirty_two = _GLF_FUZZED(0.6);
      float GLF_live8limit = _GLF_FUZZED(vec2(-3.2, 7.1).r);
      {
       float GLF_live8result = - 0.5;
       {
        int GLF_live8_looplimiter0 = 0;
        for(
            int GLF_live8i = 1;
            GLF_live8i < 800;
            GLF_live8i ++
        )
         {
          if(GLF_live8_looplimiter0 >= 7)
           {
            break;
           }
          GLF_live8_looplimiter0 ++;
          if((GLF_live8i % 32) == 0)
           {
            GLF_live8result += 0.4;
           }
          else
           if(mod(float(GLF_live8i), round(GLF_live8thirty_two)) <= 0.01)
            {
             GLF_live8result += 100.0;
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = vec4(vec3(9.6, 9.3, 99.99), 6.1);
              if(_GLF_WRAPPED_IF_TRUE(true))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
            }
          if(float(GLF_live8i) >= GLF_live8limit)
           {
            GLF_live8result;
           }
         }
       }
       GLF_live8result;
      }
     }
    }
   }
   magnitudeX = 0.0;
   alpha1 = 0.0;
   alpha2 = 0.0;
   alpha3 = 0.0;
   beta = 0.0;
  }
 for(
     int i = (MATRIX_N - 1);
     i >= 0;
     i --
 )
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = step(sin(-26.18), tanh(vec4(607.195, 9.9, -61.43, 7.7)));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   for(
       int j = (MATRIX_N - 1);
       j >= (i + 1);
       j --
   )
    {
     matrix_b[i] -= (matrix_a[i][j] * matrix_b[j]);
    }
   {
    int GLF_live6i = _GLF_FUZZED(int(false));
    int GLF_live6_looplimiter0 = 0;
    float GLF_live6A[50];
    {
     if(GLF_live6_looplimiter0 >= 7)
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(449.763, -4.4, -1.3, 3.2);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
           {
            _GLF_color = vec4(-2.9, 8271.6338, -1.9, -4586.1290);
           }
         }
       }
       1;
      }
     GLF_live6_looplimiter0 ++;
     if(GLF_live6i >= int(GLF_live6resolution.x))
      {
       1;
      }
     if((4 * (GLF_live6i / 4)) == GLF_live6i)
      {
       GLF_live6A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6i / 4, 50)] = float(GLF_live6i);
      }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-7781.7403, -56.12, -0.2, 2749.2796);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
   }
   matrix_b[i] /= matrix_a[i][i];
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = ldexp(vec4(8.3, -676.474, -734.961, 239.916), (+ ivec4(-18028, -98372, 62370, 53984)));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(16.14, -580.679, 9.8, 4.2);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      if(_GLF_DEAD(false))
       {
        _GLF_color = roundEven(vec4(vec2(2.6, -744.260), 1.2, -7.3));
       }
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = max(vec4(9666.0579, -2907.8545, 7182.6598, 7.7), vec4(-3.4, -2054.1777, -4.9, 9.4));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec4(671.186, 82.39, -68.98, 25.61);
    }
  }
 _GLF_color = tan(matrix_b);
 _GLF_color.a = 1.0;
}
