; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 89
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %65
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "func(i1;"
               OpName %9 "x"
               OpName %16 "buf0"
               OpMemberName %16 0 "_GLF_uniform_int_values"
               OpName %18 ""
               OpName %30 "a"
               OpName %34 "b"
               OpName %65 "_GLF_color"
               OpName %85 "param"
               OpDecorate %15 ArrayStride 16
               OpMemberDecorate %16 0 Offset 0
               OpDecorate %16 Block
               OpDecorate %18 DescriptorSet 0
               OpDecorate %18 Binding 0
               OpDecorate %65 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %2 %7
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 2
         %15 = OpTypeArray %6 %14
         %16 = OpTypeStruct %15
         %17 = OpTypePointer Uniform %16
         %18 = OpVariable %17 Uniform
         %19 = OpConstant %6 0
         %20 = OpTypePointer Uniform %6
         %23 = OpTypeBool
         %28 = OpTypeVector %6 2
         %29 = OpTypePointer Function %28
         %37 = OpConstant %13 0
         %43 = OpConstant %6 -1
         %62 = OpTypeFloat 32
         %63 = OpTypeVector %62 4
         %64 = OpTypePointer Output %63
         %65 = OpVariable %64 Output
         %69 = OpConstant %6 1
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %85 = OpVariable %7 Function
         %86 = OpAccessChain %20 %18 %19 %19
         %87 = OpLoad %6 %86
               OpStore %85 %87
         %88 = OpFunctionCall %2 %10 %85
               OpReturn
               OpFunctionEnd
         %10 = OpFunction %2 None %8
          %9 = OpFunctionParameter %7
         %11 = OpLabel
         %30 = OpVariable %29 Function
         %34 = OpVariable %7 Function
         %12 = OpLoad %6 %9
         %21 = OpAccessChain %20 %18 %19 %19
         %22 = OpLoad %6 %21
         %24 = OpSGreaterThan %23 %12 %22
               OpSelectionMerge %26 None
               OpBranchConditional %24 %25 %26
         %25 = OpLabel
               OpReturn
         %26 = OpLabel
         %31 = OpAccessChain %20 %18 %19 %19
         %32 = OpLoad %6 %31
         %33 = OpCompositeConstruct %28 %32 %32
               OpStore %30 %33
         %35 = OpAccessChain %20 %18 %19 %19
         %36 = OpLoad %6 %35
         %38 = OpAccessChain %7 %30 %37
         %39 = OpLoad %6 %38
         %40 = OpAccessChain %20 %18 %19 %19
         %41 = OpLoad %6 %40
         %42 = OpINotEqual %23 %39 %41
         %44 = OpSelect %6 %42 %19 %43
         %45 = OpAccessChain %7 %30 %37
         %46 = OpLoad %6 %45
         %47 = OpAccessChain %20 %18 %19 %19
         %48 = OpLoad %6 %47
         %49 = OpINotEqual %23 %46 %48
         %50 = OpSelect %6 %49 %19 %43
         %51 = OpBitwiseOr %6 %44 %50
         %52 = OpAccessChain %20 %18 %19 %19
         %53 = OpLoad %6 %52
         %54 = OpShiftRightArithmetic %6 %51 %53
         %55 = OpBitwiseAnd %6 %36 %54
               OpStore %34 %55
         %56 = OpLoad %6 %34
         %57 = OpAccessChain %20 %18 %19 %19
         %58 = OpLoad %6 %57
         %59 = OpIEqual %23 %56 %58
               OpSelectionMerge %61 None
               OpBranchConditional %59 %60 %80
         %60 = OpLabel
         %66 = OpAccessChain %20 %18 %19 %19
         %67 = OpLoad %6 %66
         %68 = OpConvertSToF %62 %67
         %70 = OpAccessChain %20 %18 %19 %69
         %71 = OpLoad %6 %70
         %72 = OpConvertSToF %62 %71
         %73 = OpAccessChain %20 %18 %19 %69
         %74 = OpLoad %6 %73
         %75 = OpConvertSToF %62 %74
         %76 = OpAccessChain %20 %18 %19 %19
         %77 = OpLoad %6 %76
         %78 = OpConvertSToF %62 %77
         %79 = OpCompositeConstruct %63 %68 %72 %75 %78
               OpStore %65 %79
               OpBranch %61
         %80 = OpLabel
         %81 = OpAccessChain %20 %18 %19 %69
         %82 = OpLoad %6 %81
         %83 = OpConvertSToF %62 %82
         %84 = OpCompositeConstruct %63 %83 %83 %83 %83
               OpStore %65 %84
               OpBranch %61
         %61 = OpLabel
               OpReturn
               OpFunctionEnd
