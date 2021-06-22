; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 139
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %61 %120
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "m23"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %29 "i"
               OpName %38 "buf0"
               OpMemberName %38 0 "_GLF_uniform_int_values"
               OpName %40 ""
               OpName %61 "gl_FragCoord"
               OpName %120 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %37 ArrayStride 16
               OpMemberDecorate %38 0 Offset 0
               OpDecorate %38 Block
               OpDecorate %40 DescriptorSet 0
               OpDecorate %40 Binding 0
               OpDecorate %61 BuiltIn FragCoord
               OpDecorate %120 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 3
          %8 = OpTypeMatrix %7 2
          %9 = OpTypePointer Function %8
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 2
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpConstant %17 1
         %20 = OpTypePointer Uniform %6
         %23 = OpConstant %6 1
         %24 = OpConstant %6 0
         %28 = OpTypePointer Function %17
         %36 = OpConstant %11 4
         %37 = OpTypeArray %17 %36
         %38 = OpTypeStruct %37
         %39 = OpTypePointer Uniform %38
         %40 = OpVariable %39 Uniform
         %41 = OpConstant %17 3
         %42 = OpTypePointer Uniform %17
         %45 = OpTypeBool
         %49 = OpConstant %17 2
         %54 = OpTypePointer Function %6
         %59 = OpTypeVector %6 4
         %60 = OpTypePointer Input %59
         %61 = OpVariable %60 Input
         %62 = OpConstant %11 1
         %63 = OpTypePointer Input %6
         %71 = OpConstantTrue %45
         %74 = OpConstant %11 0
        %109 = OpTypeVector %45 3
        %119 = OpTypePointer Output %59
        %120 = OpVariable %119 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %10 = OpVariable %9 Function
         %29 = OpVariable %28 Function
         %21 = OpAccessChain %20 %16 %18 %19
         %22 = OpLoad %6 %21
         %25 = OpCompositeConstruct %7 %22 %24 %24
         %26 = OpCompositeConstruct %7 %24 %22 %24
         %27 = OpCompositeConstruct %8 %25 %26
               OpStore %10 %27
               OpStore %29 %19
               OpBranch %30
         %30 = OpLabel
               OpLoopMerge %32 %33 None
               OpBranch %34
         %34 = OpLabel
         %35 = OpLoad %17 %29
         %43 = OpAccessChain %42 %40 %18 %41
         %44 = OpLoad %17 %43
         %46 = OpSLessThan %45 %35 %44
               OpBranchConditional %46 %31 %32
         %31 = OpLabel
         %47 = OpAccessChain %42 %40 %18 %18
         %48 = OpLoad %17 %47
         %50 = OpAccessChain %42 %40 %18 %49
         %51 = OpLoad %17 %50
         %52 = OpAccessChain %20 %16 %18 %18
         %53 = OpLoad %6 %52
         %55 = OpAccessChain %54 %10 %48 %51
         %56 = OpLoad %6 %55
         %57 = OpFAdd %6 %56 %53
         %58 = OpAccessChain %54 %10 %48 %51
               OpStore %58 %57
         %64 = OpAccessChain %63 %61 %62
         %65 = OpLoad %6 %64
         %66 = OpAccessChain %20 %16 %18 %18
         %67 = OpLoad %6 %66
         %68 = OpFOrdLessThan %45 %65 %67
               OpSelectionMerge %70 None
               OpBranchConditional %68 %69 %70
         %69 = OpLabel
               OpBranch %70
         %70 = OpLabel
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %73
         %72 = OpLabel
         %75 = OpAccessChain %63 %61 %74
         %76 = OpLoad %6 %75
         %77 = OpFOrdLessThan %45 %76 %24
               OpBranch %73
         %73 = OpLabel
         %78 = OpPhi %45 %71 %70 %77 %72
         %79 = OpLogicalNot %45 %78
               OpSelectionMerge %81 None
               OpBranchConditional %79 %80 %81
         %80 = OpLabel
               OpBranch %32
         %81 = OpLabel
               OpBranch %33
         %33 = OpLabel
         %83 = OpLoad %17 %29
         %84 = OpIAdd %17 %83 %19
               OpStore %29 %84
               OpBranch %30
         %32 = OpLabel
         %85 = OpLoad %8 %10
         %86 = OpAccessChain %42 %40 %18 %19
         %87 = OpLoad %17 %86
         %88 = OpConvertSToF %6 %87
         %89 = OpAccessChain %42 %40 %18 %19
         %90 = OpLoad %17 %89
         %91 = OpConvertSToF %6 %90
         %92 = OpAccessChain %42 %40 %18 %19
         %93 = OpLoad %17 %92
         %94 = OpConvertSToF %6 %93
         %95 = OpAccessChain %42 %40 %18 %19
         %96 = OpLoad %17 %95
         %97 = OpConvertSToF %6 %96
         %98 = OpAccessChain %42 %40 %18 %19
         %99 = OpLoad %17 %98
        %100 = OpConvertSToF %6 %99
        %101 = OpAccessChain %42 %40 %18 %18
        %102 = OpLoad %17 %101
        %103 = OpConvertSToF %6 %102
        %104 = OpCompositeConstruct %7 %88 %91 %94
        %105 = OpCompositeConstruct %7 %97 %100 %103
        %106 = OpCompositeConstruct %8 %104 %105
        %107 = OpCompositeExtract %7 %85 0
        %108 = OpCompositeExtract %7 %106 0
        %110 = OpFOrdEqual %109 %107 %108
        %111 = OpAll %45 %110
        %112 = OpCompositeExtract %7 %85 1
        %113 = OpCompositeExtract %7 %106 1
        %114 = OpFOrdEqual %109 %112 %113
        %115 = OpAll %45 %114
        %116 = OpLogicalAnd %45 %111 %115
               OpSelectionMerge %118 None
               OpBranchConditional %116 %117 %134
        %117 = OpLabel
        %121 = OpAccessChain %42 %40 %18 %18
        %122 = OpLoad %17 %121
        %123 = OpConvertSToF %6 %122
        %124 = OpAccessChain %42 %40 %18 %19
        %125 = OpLoad %17 %124
        %126 = OpConvertSToF %6 %125
        %127 = OpAccessChain %42 %40 %18 %19
        %128 = OpLoad %17 %127
        %129 = OpConvertSToF %6 %128
        %130 = OpAccessChain %42 %40 %18 %18
        %131 = OpLoad %17 %130
        %132 = OpConvertSToF %6 %131
        %133 = OpCompositeConstruct %59 %123 %126 %129 %132
               OpStore %120 %133
               OpBranch %118
        %134 = OpLabel
        %135 = OpAccessChain %42 %40 %18 %19
        %136 = OpLoad %17 %135
        %137 = OpConvertSToF %6 %136
        %138 = OpCompositeConstruct %59 %137 %137 %137 %137
               OpStore %120 %138
               OpBranch %118
        %118 = OpLabel
               OpReturn
               OpFunctionEnd
