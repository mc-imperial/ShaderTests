; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 138
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %119
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %36 "i"
               OpName %83 "buf0"
               OpMemberName %83 0 "_GLF_uniform_float_values"
               OpName %85 ""
               OpName %119 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %82 ArrayStride 16
               OpMemberDecorate %83 0 Offset 0
               OpDecorate %83 Block
               OpDecorate %85 DescriptorSet 0
               OpDecorate %85 Binding 0
               OpDecorate %119 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 5
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpConstant %10 1
         %19 = OpTypePointer Uniform %10
         %23 = OpConstant %10 2
         %27 = OpConstant %10 3
         %35 = OpTypePointer Function %10
         %37 = OpConstant %10 4
         %48 = OpTypeBool
         %54 = OpTypeMatrix %7 4
         %55 = OpConstant %6 1
         %56 = OpConstant %6 0
         %81 = OpConstant %11 2
         %82 = OpTypeArray %6 %81
         %83 = OpTypeStruct %82
         %84 = OpTypePointer Uniform %83
         %85 = OpVariable %84 Uniform
         %86 = OpTypePointer Uniform %6
        %104 = OpTypePointer Function %6
        %113 = OpTypeVector %48 4
        %118 = OpTypePointer Output %7
        %119 = OpVariable %118 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %36 = OpVariable %35 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %10 %20
         %22 = OpConvertSToF %6 %21
         %24 = OpAccessChain %19 %16 %17 %23
         %25 = OpLoad %10 %24
         %26 = OpConvertSToF %6 %25
         %28 = OpAccessChain %19 %16 %17 %27
         %29 = OpLoad %10 %28
         %30 = OpConvertSToF %6 %29
         %31 = OpAccessChain %19 %16 %17 %17
         %32 = OpLoad %10 %31
         %33 = OpConvertSToF %6 %32
         %34 = OpCompositeConstruct %7 %22 %26 %30 %33
               OpStore %9 %34
         %38 = OpAccessChain %19 %16 %17 %37
         %39 = OpLoad %10 %38
               OpStore %36 %39
               OpBranch %40
         %40 = OpLabel
               OpLoopMerge %42 %43 None
               OpBranch %44
         %44 = OpLabel
         %45 = OpLoad %10 %36
         %46 = OpAccessChain %19 %16 %17 %17
         %47 = OpLoad %10 %46
         %49 = OpSLessThan %48 %45 %47
               OpBranchConditional %49 %41 %42
         %41 = OpLabel
         %50 = OpLoad %7 %9
         %51 = OpLoad %7 %9
         %52 = OpLoad %7 %9
         %53 = OpLoad %7 %9
         %57 = OpCompositeExtract %6 %50 0
         %58 = OpCompositeExtract %6 %50 1
         %59 = OpCompositeExtract %6 %50 2
         %60 = OpCompositeExtract %6 %50 3
         %61 = OpCompositeExtract %6 %51 0
         %62 = OpCompositeExtract %6 %51 1
         %63 = OpCompositeExtract %6 %51 2
         %64 = OpCompositeExtract %6 %51 3
         %65 = OpCompositeExtract %6 %52 0
         %66 = OpCompositeExtract %6 %52 1
         %67 = OpCompositeExtract %6 %52 2
         %68 = OpCompositeExtract %6 %52 3
         %69 = OpCompositeExtract %6 %53 0
         %70 = OpCompositeExtract %6 %53 1
         %71 = OpCompositeExtract %6 %53 2
         %72 = OpCompositeExtract %6 %53 3
         %73 = OpCompositeConstruct %7 %57 %58 %59 %60
         %74 = OpCompositeConstruct %7 %61 %62 %63 %64
         %75 = OpCompositeConstruct %7 %65 %66 %67 %68
         %76 = OpCompositeConstruct %7 %69 %70 %71 %72
         %77 = OpCompositeConstruct %54 %73 %74 %75 %76
         %78 = OpLoad %10 %36
         %79 = OpCompositeExtract %7 %77 0
         %80 = OpVectorExtractDynamic %6 %79 %78
         %87 = OpAccessChain %86 %85 %17 %17
         %88 = OpLoad %6 %87
         %89 = OpFOrdGreaterThan %48 %80 %88
               OpSelectionMerge %91 None
               OpBranchConditional %89 %90 %91
         %90 = OpLabel
         %92 = OpLoad %10 %36
         %93 = OpLoad %7 %9
         %94 = OpAccessChain %86 %85 %17 %18
         %95 = OpLoad %6 %94
         %96 = OpCompositeConstruct %7 %95 %95 %95 %95
         %97 = OpAccessChain %86 %85 %17 %17
         %98 = OpLoad %6 %97
         %99 = OpCompositeConstruct %7 %98 %98 %98 %98
        %100 = OpExtInst %7 %1 FClamp %93 %96 %99
        %101 = OpAccessChain %19 %16 %17 %18
        %102 = OpLoad %10 %101
        %103 = OpVectorExtractDynamic %6 %100 %102
        %105 = OpAccessChain %104 %9 %92
               OpStore %105 %103
               OpBranch %91
         %91 = OpLabel
               OpBranch %43
         %43 = OpLabel
        %106 = OpLoad %10 %36
        %107 = OpIAdd %10 %106 %18
               OpStore %36 %107
               OpBranch %40
         %42 = OpLabel
        %108 = OpLoad %7 %9
        %109 = OpAccessChain %19 %16 %17 %18
        %110 = OpLoad %10 %109
        %111 = OpConvertSToF %6 %110
        %112 = OpCompositeConstruct %7 %111 %111 %111 %111
        %114 = OpFOrdEqual %113 %108 %112
        %115 = OpAll %48 %114
               OpSelectionMerge %117 None
               OpBranchConditional %115 %116 %133
        %116 = OpLabel
        %120 = OpAccessChain %19 %16 %17 %18
        %121 = OpLoad %10 %120
        %122 = OpConvertSToF %6 %121
        %123 = OpAccessChain %19 %16 %17 %37
        %124 = OpLoad %10 %123
        %125 = OpConvertSToF %6 %124
        %126 = OpAccessChain %19 %16 %17 %37
        %127 = OpLoad %10 %126
        %128 = OpConvertSToF %6 %127
        %129 = OpAccessChain %19 %16 %17 %18
        %130 = OpLoad %10 %129
        %131 = OpConvertSToF %6 %130
        %132 = OpCompositeConstruct %7 %122 %125 %128 %131
               OpStore %119 %132
               OpBranch %117
        %133 = OpLabel
        %134 = OpAccessChain %19 %16 %17 %37
        %135 = OpLoad %10 %134
        %136 = OpConvertSToF %6 %135
        %137 = OpCompositeConstruct %7 %136 %136 %136 %136
               OpStore %119 %137
               OpBranch %117
        %117 = OpLabel
               OpReturn
               OpFunctionEnd
