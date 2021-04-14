; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 111
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %92
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %22 "v"
               OpName %25 "buf1"
               OpMemberName %25 0 "_GLF_uniform_float_values"
               OpName %27 ""
               OpName %35 "m"
               OpName %74 "indexable"
               OpName %92 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %24 ArrayStride 16
               OpMemberDecorate %25 0 Offset 0
               OpDecorate %25 Block
               OpDecorate %27 DescriptorSet 0
               OpDecorate %27 Binding 1
               OpDecorate %92 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 2
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpTypePointer Uniform %6
         %19 = OpTypeFloat 32
         %20 = OpTypeVector %19 4
         %21 = OpTypePointer Function %20
         %23 = OpConstant %9 4
         %24 = OpTypeArray %19 %23
         %25 = OpTypeStruct %24
         %26 = OpTypePointer Uniform %25
         %27 = OpVariable %26 Uniform
         %28 = OpConstant %6 2
         %29 = OpTypePointer Uniform %19
         %33 = OpTypeMatrix %20 3
         %34 = OpTypePointer Function %33
         %36 = OpConstant %6 3
         %39 = OpConstant %19 1
         %40 = OpConstant %19 0
         %49 = OpTypePointer Function %19
         %53 = OpTypeMatrix %20 4
         %73 = OpTypePointer Function %53
         %81 = OpConstant %9 1
         %84 = OpConstant %6 1
         %87 = OpTypeBool
         %91 = OpTypePointer Output %20
         %92 = OpVariable %91 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %22 = OpVariable %21 Function
         %35 = OpVariable %34 Function
         %74 = OpVariable %73 Function
         %17 = OpAccessChain %16 %14 %15 %15
         %18 = OpLoad %6 %17
               OpStore %8 %18
         %30 = OpAccessChain %29 %27 %15 %28
         %31 = OpLoad %19 %30
         %32 = OpCompositeConstruct %20 %31 %31 %31 %31
               OpStore %22 %32
         %37 = OpAccessChain %29 %27 %15 %36
         %38 = OpLoad %19 %37
         %41 = OpCompositeConstruct %20 %38 %40 %40 %40
         %42 = OpCompositeConstruct %20 %40 %38 %40 %40
         %43 = OpCompositeConstruct %20 %40 %40 %38 %40
         %44 = OpCompositeConstruct %33 %41 %42 %43
               OpStore %35 %44
         %45 = OpLoad %6 %8
         %46 = OpLoad %6 %8
         %47 = OpAccessChain %29 %27 %15 %15
         %48 = OpLoad %19 %47
         %50 = OpAccessChain %49 %35 %45 %46
               OpStore %50 %48
         %51 = OpLoad %6 %8
         %52 = OpLoad %33 %35
         %54 = OpCompositeExtract %19 %52 0 0
         %55 = OpCompositeExtract %19 %52 0 1
         %56 = OpCompositeExtract %19 %52 0 2
         %57 = OpCompositeExtract %19 %52 0 3
         %58 = OpCompositeExtract %19 %52 1 0
         %59 = OpCompositeExtract %19 %52 1 1
         %60 = OpCompositeExtract %19 %52 1 2
         %61 = OpCompositeExtract %19 %52 1 3
         %62 = OpCompositeExtract %19 %52 2 0
         %63 = OpCompositeExtract %19 %52 2 1
         %64 = OpCompositeExtract %19 %52 2 2
         %65 = OpCompositeExtract %19 %52 2 3
         %66 = OpCompositeConstruct %20 %54 %55 %56 %57
         %67 = OpCompositeConstruct %20 %58 %59 %60 %61
         %68 = OpCompositeConstruct %20 %62 %63 %64 %65
         %69 = OpCompositeConstruct %20 %40 %40 %40 %39
         %70 = OpCompositeConstruct %53 %66 %67 %68 %69
         %71 = OpLoad %6 %8
         %72 = OpLoad %6 %8
               OpStore %74 %70
         %75 = OpAccessChain %49 %74 %71 %72
         %76 = OpLoad %19 %75
         %77 = OpAccessChain %49 %22 %51
         %78 = OpLoad %19 %77
         %79 = OpFAdd %19 %78 %76
         %80 = OpAccessChain %49 %22 %51
               OpStore %80 %79
         %82 = OpAccessChain %49 %22 %81
         %83 = OpLoad %19 %82
         %85 = OpAccessChain %29 %27 %15 %84
         %86 = OpLoad %19 %85
         %88 = OpFOrdEqual %87 %83 %86
               OpSelectionMerge %90 None
               OpBranchConditional %88 %89 %106
         %89 = OpLabel
         %93 = OpAccessChain %16 %14 %15 %15
         %94 = OpLoad %6 %93
         %95 = OpConvertSToF %19 %94
         %96 = OpAccessChain %16 %14 %15 %84
         %97 = OpLoad %6 %96
         %98 = OpConvertSToF %19 %97
         %99 = OpAccessChain %16 %14 %15 %84
        %100 = OpLoad %6 %99
        %101 = OpConvertSToF %19 %100
        %102 = OpAccessChain %16 %14 %15 %15
        %103 = OpLoad %6 %102
        %104 = OpConvertSToF %19 %103
        %105 = OpCompositeConstruct %20 %95 %98 %101 %104
               OpStore %92 %105
               OpBranch %90
        %106 = OpLabel
        %107 = OpAccessChain %16 %14 %15 %84
        %108 = OpLoad %6 %107
        %109 = OpConvertSToF %19 %108
        %110 = OpCompositeConstruct %20 %109 %109 %109 %109
               OpStore %92 %110
               OpBranch %90
         %90 = OpLabel
               OpReturn
               OpFunctionEnd
