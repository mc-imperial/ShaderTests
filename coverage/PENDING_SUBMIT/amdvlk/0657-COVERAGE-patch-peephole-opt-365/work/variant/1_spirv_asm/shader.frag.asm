; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 122
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %103
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %37 "i"
               OpName %60 "buf0"
               OpMemberName %60 0 "_GLF_uniform_float_values"
               OpName %62 ""
               OpName %103 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %59 ArrayStride 16
               OpMemberDecorate %60 0 Offset 0
               OpDecorate %60 Block
               OpDecorate %62 DescriptorSet 0
               OpDecorate %62 Binding 0
               OpDecorate %103 Location 0
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
         %31 = OpConstant %10 4
         %36 = OpTypePointer Function %10
         %48 = OpTypeBool
         %58 = OpConstant %11 1
         %59 = OpTypeArray %6 %58
         %60 = OpTypeStruct %59
         %61 = OpTypePointer Uniform %60
         %62 = OpVariable %61 Uniform
         %63 = OpTypePointer Uniform %6
         %79 = OpTypePointer Function %6
         %97 = OpTypeVector %48 4
        %102 = OpTypePointer Output %7
        %103 = OpVariable %102 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %37 = OpVariable %36 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %10 %20
         %22 = OpConvertSToF %6 %21
         %24 = OpAccessChain %19 %16 %17 %23
         %25 = OpLoad %10 %24
         %26 = OpConvertSToF %6 %25
         %28 = OpAccessChain %19 %16 %17 %27
         %29 = OpLoad %10 %28
         %30 = OpConvertSToF %6 %29
         %32 = OpAccessChain %19 %16 %17 %31
         %33 = OpLoad %10 %32
         %34 = OpConvertSToF %6 %33
         %35 = OpCompositeConstruct %7 %22 %26 %30 %34
               OpStore %9 %35
         %38 = OpAccessChain %19 %16 %17 %18
         %39 = OpLoad %10 %38
               OpStore %37 %39
               OpBranch %40
         %40 = OpLabel
               OpLoopMerge %42 %43 None
               OpBranch %44
         %44 = OpLabel
         %45 = OpLoad %10 %37
         %46 = OpAccessChain %19 %16 %17 %17
         %47 = OpLoad %10 %46
         %49 = OpSLessThan %48 %45 %47
               OpBranchConditional %49 %41 %42
         %41 = OpLabel
         %50 = OpLoad %7 %9
         %51 = OpCompositeExtract %6 %50 0
         %52 = OpCompositeExtract %6 %50 1
         %53 = OpCompositeExtract %6 %50 2
         %54 = OpCompositeExtract %6 %50 3
         %55 = OpCompositeConstruct %7 %51 %52 %53 %54
         %56 = OpLoad %10 %37
         %57 = OpVectorExtractDynamic %6 %55 %56
         %64 = OpAccessChain %63 %62 %17 %17
         %65 = OpLoad %6 %64
         %66 = OpFOrdGreaterThan %48 %57 %65
               OpSelectionMerge %68 None
               OpBranchConditional %66 %67 %68
         %67 = OpLabel
         %69 = OpLoad %10 %37
         %70 = OpAccessChain %63 %62 %17 %17
         %71 = OpLoad %6 %70
         %72 = OpCompositeConstruct %7 %71 %71 %71 %71
         %73 = OpLoad %7 %9
         %74 = OpLoad %7 %9
         %75 = OpExtInst %7 %1 FClamp %72 %73 %74
         %76 = OpAccessChain %19 %16 %17 %23
         %77 = OpLoad %10 %76
         %78 = OpVectorExtractDynamic %6 %75 %77
         %80 = OpAccessChain %79 %9 %69
               OpStore %80 %78
               OpBranch %68
         %68 = OpLabel
               OpBranch %43
         %43 = OpLabel
         %81 = OpLoad %10 %37
         %82 = OpIAdd %10 %81 %18
               OpStore %37 %82
               OpBranch %40
         %42 = OpLabel
         %83 = OpLoad %7 %9
         %84 = OpAccessChain %19 %16 %17 %18
         %85 = OpLoad %10 %84
         %86 = OpConvertSToF %6 %85
         %87 = OpAccessChain %19 %16 %17 %23
         %88 = OpLoad %10 %87
         %89 = OpConvertSToF %6 %88
         %90 = OpAccessChain %19 %16 %17 %23
         %91 = OpLoad %10 %90
         %92 = OpConvertSToF %6 %91
         %93 = OpAccessChain %19 %16 %17 %23
         %94 = OpLoad %10 %93
         %95 = OpConvertSToF %6 %94
         %96 = OpCompositeConstruct %7 %86 %89 %92 %95
         %98 = OpFOrdEqual %97 %83 %96
         %99 = OpAll %48 %98
               OpSelectionMerge %101 None
               OpBranchConditional %99 %100 %117
        %100 = OpLabel
        %104 = OpAccessChain %19 %16 %17 %23
        %105 = OpLoad %10 %104
        %106 = OpConvertSToF %6 %105
        %107 = OpAccessChain %19 %16 %17 %18
        %108 = OpLoad %10 %107
        %109 = OpConvertSToF %6 %108
        %110 = OpAccessChain %19 %16 %17 %18
        %111 = OpLoad %10 %110
        %112 = OpConvertSToF %6 %111
        %113 = OpAccessChain %19 %16 %17 %23
        %114 = OpLoad %10 %113
        %115 = OpConvertSToF %6 %114
        %116 = OpCompositeConstruct %7 %106 %109 %112 %115
               OpStore %103 %116
               OpBranch %101
        %117 = OpLabel
        %118 = OpAccessChain %19 %16 %17 %18
        %119 = OpLoad %10 %118
        %120 = OpConvertSToF %6 %119
        %121 = OpCompositeConstruct %7 %120 %120 %120 %120
               OpStore %103 %121
               OpBranch %101
        %101 = OpLabel
               OpReturn
               OpFunctionEnd
