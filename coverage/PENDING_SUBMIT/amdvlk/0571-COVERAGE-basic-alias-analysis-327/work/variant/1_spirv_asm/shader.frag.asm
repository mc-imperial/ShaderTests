; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 97
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %78
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %24 "arr"
               OpName %78 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %78 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %21 = OpConstant %9 10
         %22 = OpTypeArray %6 %21
         %23 = OpTypePointer Function %22
         %56 = OpTypeBool
         %69 = OpConstant %6 2
         %75 = OpTypeFloat 32
         %76 = OpTypeVector %75 4
         %77 = OpTypePointer Output %76
         %78 = OpVariable %77 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %24 = OpVariable %23 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
         %20 = OpBitwiseOr %6 %19 %16
               OpStore %8 %20
         %25 = OpAccessChain %17 %14 %15 %15
         %26 = OpLoad %6 %25
         %27 = OpAccessChain %17 %14 %15 %15
         %28 = OpLoad %6 %27
         %29 = OpAccessChain %17 %14 %15 %15
         %30 = OpLoad %6 %29
         %31 = OpAccessChain %17 %14 %15 %15
         %32 = OpLoad %6 %31
         %33 = OpAccessChain %17 %14 %15 %15
         %34 = OpLoad %6 %33
         %35 = OpAccessChain %17 %14 %15 %15
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %17 %14 %15 %15
         %38 = OpLoad %6 %37
         %39 = OpAccessChain %17 %14 %15 %15
         %40 = OpLoad %6 %39
         %41 = OpAccessChain %17 %14 %15 %15
         %42 = OpLoad %6 %41
         %43 = OpAccessChain %17 %14 %15 %15
         %44 = OpLoad %6 %43
         %45 = OpCompositeConstruct %22 %26 %28 %30 %32 %34 %36 %38 %40 %42 %44
               OpStore %24 %45
         %46 = OpLoad %6 %8
         %47 = OpAccessChain %7 %24 %46
         %48 = OpLoad %6 %47
         %49 = OpIAdd %6 %48 %16
               OpStore %47 %49
         %50 = OpAccessChain %17 %14 %15 %16
         %51 = OpLoad %6 %50
         %52 = OpAccessChain %7 %24 %51
         %53 = OpLoad %6 %52
         %54 = OpAccessChain %17 %14 %15 %16
         %55 = OpLoad %6 %54
         %57 = OpIEqual %56 %53 %55
               OpSelectionMerge %59 None
               OpBranchConditional %57 %58 %59
         %58 = OpLabel
         %60 = OpAccessChain %17 %14 %15 %16
         %61 = OpLoad %6 %60
         %62 = OpAccessChain %7 %24 %61
         %63 = OpLoad %6 %62
         %64 = OpIAdd %6 %63 %16
               OpStore %62 %64
               OpBranch %59
         %59 = OpLabel
         %65 = OpAccessChain %17 %14 %15 %16
         %66 = OpLoad %6 %65
         %67 = OpAccessChain %7 %24 %66
         %68 = OpLoad %6 %67
         %70 = OpAccessChain %17 %14 %15 %69
         %71 = OpLoad %6 %70
         %72 = OpIEqual %56 %68 %71
               OpSelectionMerge %74 None
               OpBranchConditional %72 %73 %92
         %73 = OpLabel
         %79 = OpAccessChain %17 %14 %15 %16
         %80 = OpLoad %6 %79
         %81 = OpConvertSToF %75 %80
         %82 = OpAccessChain %17 %14 %15 %15
         %83 = OpLoad %6 %82
         %84 = OpConvertSToF %75 %83
         %85 = OpAccessChain %17 %14 %15 %15
         %86 = OpLoad %6 %85
         %87 = OpConvertSToF %75 %86
         %88 = OpAccessChain %17 %14 %15 %16
         %89 = OpLoad %6 %88
         %90 = OpConvertSToF %75 %89
         %91 = OpCompositeConstruct %76 %81 %84 %87 %90
               OpStore %78 %91
               OpBranch %74
         %92 = OpLabel
         %93 = OpAccessChain %17 %14 %15 %15
         %94 = OpLoad %6 %93
         %95 = OpConvertSToF %75 %94
         %96 = OpCompositeConstruct %76 %95 %95 %95 %95
               OpStore %78 %96
               OpBranch %74
         %74 = OpLabel
               OpReturn
               OpFunctionEnd
