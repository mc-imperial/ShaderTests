; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 72
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %12 %52
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "gl_FragCoord"
               OpName %41 "buf0"
               OpMemberName %41 0 "_GLF_uniform_int_values"
               OpName %43 ""
               OpName %52 "_GLF_color"
               OpDecorate %12 BuiltIn FragCoord
               OpDecorate %40 ArrayStride 16
               OpMemberDecorate %41 0 Offset 0
               OpDecorate %41 Block
               OpDecorate %43 DescriptorSet 0
               OpDecorate %43 Binding 0
               OpDecorate %52 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeFloat 32
         %10 = OpTypeVector %9 4
         %11 = OpTypePointer Input %10
         %12 = OpVariable %11 Input
         %13 = OpTypeVector %9 2
         %16 = OpTypeVector %6 2
         %18 = OpTypeInt 32 0
         %19 = OpConstant %18 1
         %21 = OpConstant %6 256
         %23 = OpConstant %6 0
         %24 = OpTypeBool
         %28 = OpConstant %6 -1
         %39 = OpConstant %18 2
         %40 = OpTypeArray %6 %39
         %41 = OpTypeStruct %40
         %42 = OpTypePointer Uniform %41
         %43 = OpVariable %42 Uniform
         %44 = OpTypePointer Uniform %6
         %51 = OpTypePointer Output %10
         %52 = OpVariable %51 Output
         %53 = OpConstant %6 1
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %14 = OpLoad %10 %12
         %15 = OpVectorShuffle %13 %14 %14 0 1
         %17 = OpConvertFToS %16 %15
         %20 = OpCompositeExtract %6 %17 1
         %22 = OpBitwiseAnd %6 %20 %21
         %25 = OpINotEqual %24 %22 %23
         %26 = OpLogicalNot %24 %25
         %27 = OpLogicalNot %24 %26
         %29 = OpSelect %6 %27 %23 %28
         %30 = OpLoad %10 %12
         %31 = OpVectorShuffle %13 %30 %30 0 1
         %32 = OpConvertFToS %16 %31
         %33 = OpCompositeExtract %6 %32 1
         %34 = OpBitwiseAnd %6 %33 %21
         %35 = OpINotEqual %24 %34 %23
         %36 = OpSelect %6 %35 %23 %28
         %37 = OpBitwiseOr %6 %29 %36
               OpStore %8 %37
         %38 = OpLoad %6 %8
         %45 = OpAccessChain %44 %43 %23 %23
         %46 = OpLoad %6 %45
         %47 = OpNot %6 %46
         %48 = OpIEqual %24 %38 %47
               OpSelectionMerge %50 None
               OpBranchConditional %48 %49 %67
         %49 = OpLabel
         %54 = OpAccessChain %44 %43 %23 %53
         %55 = OpLoad %6 %54
         %56 = OpConvertSToF %9 %55
         %57 = OpAccessChain %44 %43 %23 %23
         %58 = OpLoad %6 %57
         %59 = OpConvertSToF %9 %58
         %60 = OpAccessChain %44 %43 %23 %23
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %9 %61
         %63 = OpAccessChain %44 %43 %23 %53
         %64 = OpLoad %6 %63
         %65 = OpConvertSToF %9 %64
         %66 = OpCompositeConstruct %10 %56 %59 %62 %65
               OpStore %52 %66
               OpBranch %50
         %67 = OpLabel
         %68 = OpAccessChain %44 %43 %23 %23
         %69 = OpLoad %6 %68
         %70 = OpConvertSToF %9 %69
         %71 = OpCompositeConstruct %10 %70 %70 %70 %70
               OpStore %52 %71
               OpBranch %50
         %50 = OpLabel
               OpReturn
               OpFunctionEnd
