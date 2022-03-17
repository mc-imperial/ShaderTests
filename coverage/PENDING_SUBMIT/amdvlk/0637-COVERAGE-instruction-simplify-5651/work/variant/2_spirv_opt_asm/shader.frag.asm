; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 124
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %61 %73
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %23 "buf0"
               OpMemberName %23 0 "_GLF_uniform_float_values"
               OpName %25 ""
               OpName %61 "gl_FragCoord"
               OpName %73 "_GLF_color"
               OpName %75 "buf1"
               OpMemberName %75 0 "_GLF_uniform_int_values"
               OpName %77 ""
               OpDecorate %22 ArrayStride 16
               OpMemberDecorate %23 0 Offset 0
               OpDecorate %23 Block
               OpDecorate %25 DescriptorSet 0
               OpDecorate %25 Binding 0
               OpDecorate %61 BuiltIn FragCoord
               OpDecorate %73 Location 0
               OpDecorate %74 ArrayStride 16
               OpMemberDecorate %75 0 Offset 0
               OpDecorate %75 Block
               OpDecorate %77 DescriptorSet 0
               OpDecorate %77 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
         %13 = OpTypeInt 32 1
         %14 = OpConstant %13 1
         %18 = OpConstant %6 1
         %20 = OpTypeInt 32 0
         %21 = OpConstant %20 2
         %22 = OpTypeArray %6 %21
         %23 = OpTypeStruct %22
         %24 = OpTypePointer Uniform %23
         %25 = OpVariable %24 Uniform
         %26 = OpConstant %13 0
         %27 = OpTypePointer Uniform %6
         %30 = OpTypeVector %6 4
         %31 = OpTypeMatrix %30 4
         %32 = OpConstant %6 0
         %60 = OpTypePointer Input %30
         %61 = OpVariable %60 Input
         %67 = OpConstant %6 0.5
         %68 = OpTypeBool
         %72 = OpTypePointer Output %30
         %73 = OpVariable %72 Output
         %74 = OpTypeArray %13 %21
         %75 = OpTypeStruct %74
         %76 = OpTypePointer Uniform %75
         %77 = OpVariable %76 Uniform
         %78 = OpTypePointer Uniform %13
        %123 = OpUndef %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %62 = OpLoad %30 %61
         %63 = OpVectorShuffle %7 %62 %62 0 1
         %64 = OpExtInst %7 %1 Fract %63
         %98 = OpAccessChain %27 %25 %26 %26
         %99 = OpLoad %6 %98
        %100 = OpCompositeConstruct %30 %99 %32 %32 %32
        %101 = OpCompositeConstruct %30 %32 %99 %32 %32
        %102 = OpCompositeConstruct %30 %32 %32 %99 %32
        %103 = OpCompositeConstruct %30 %32 %32 %32 %99
        %104 = OpCompositeConstruct %31 %100 %101 %102 %103
        %105 = OpTranspose %31 %104
        %106 = OpCompositeExtract %6 %105 0 0
        %108 = OpCompositeConstruct %7 %106 %123
        %110 = OpAccessChain %27 %25 %26 %14
        %111 = OpLoad %6 %110
        %112 = OpCompositeConstruct %30 %111 %32 %32 %32
        %113 = OpCompositeConstruct %30 %32 %111 %32 %32
        %114 = OpCompositeConstruct %30 %32 %32 %111 %32
        %115 = OpCompositeConstruct %30 %32 %32 %32 %111
        %116 = OpCompositeConstruct %31 %112 %113 %114 %115
        %117 = OpTranspose %31 %116
        %118 = OpCompositeExtract %6 %117 0 0
        %120 = OpCompositeConstruct %7 %118 %123
        %121 = OpExtInst %7 %1 FClamp %108 %64 %120
        %122 = OpCompositeExtract %6 %121 0
         %69 = OpFOrdEqual %68 %122 %67
               OpSelectionMerge %71 None
               OpBranchConditional %69 %70 %89
         %89 = OpLabel
         %90 = OpAccessChain %78 %77 %26 %26
         %91 = OpLoad %13 %90
         %92 = OpConvertSToF %6 %91
         %93 = OpCompositeConstruct %30 %92 %92 %92 %92
               OpStore %73 %93
               OpBranch %71
         %70 = OpLabel
         %79 = OpAccessChain %78 %77 %26 %26
         %80 = OpLoad %13 %79
         %81 = OpConvertSToF %6 %80
         %85 = OpAccessChain %78 %77 %26 %14
         %86 = OpLoad %13 %85
         %87 = OpConvertSToF %6 %86
         %88 = OpCompositeConstruct %30 %18 %81 %81 %87
               OpStore %73 %88
               OpBranch %71
         %71 = OpLabel
               OpReturn
               OpFunctionEnd
